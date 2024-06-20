const express = require('express');
const path = require('path');
const helmet = require('helmet');
const crypto = require('crypto');
const { execSync } = require('child_process');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to set security headers
app.use(helmet());
app.use(helmet.frameguard({ action: 'deny' }));

// Generate a secure nonce
app.use((req, res, next) => {
    res.locals.nonce = crypto.randomBytes(16).toString('base64');
    next();
});

// Apply CSP using nonce and whitelisted sources
app.use((req, res, next) => {
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", `'nonce-${res.locals.nonce}'`],
            styleSrc: ["'self'", `'nonce-${res.locals.nonce}'`, "https:"],
            imgSrc: ["'self'", "data:", "https://cdn.discordapp.com"],
            connectSrc: ["'self'", "https:"],
            fontSrc: ["'self'", "data:", "https:"],
            baseUri: ["'self'"],
            formAction: ["'self'"],
            frameAncestors: ["'none'"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
        },
    })(req, res, next);
});

// Apply CORS policy
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://cdn.discordapp.com");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Serve static files from the React app
app.use('/KryptoneV2', express.static(path.join(__dirname, 'client', 'build')));

// The "catchall" handler: for any request that doesn't match one above, send back the React index.html file.
app.get('*', (req, res) => {
    const indexFile = path.join(__dirname, 'client', 'build', 'index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading index.html file:', err);
            return res.status(500).send('Internal Server Error');
        }
        const nonce = res.locals.nonce;
        const updatedData = data.replace('<meta name="csp-nonce" content="">', `<meta name="csp-nonce" content="${nonce}">`);
        res.send(updatedData);
    });
});

// Build the React app if it hasn't been built already
const buildReactApp = () => {
    console.log("Building the React application...");
    execSync('npm run build', { stdio: 'inherit', cwd: path.join(__dirname, 'client') });
};

try {
    buildReactApp();
} catch (error) {
    console.error("Error building the React application:", error);
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
