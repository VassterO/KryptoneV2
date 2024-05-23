const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');

// Load environment variables
require('dotenv').config();

const app = express();

// Middleware setup
app.use(cors({
    origin: 'https://kryptonefacilities.netlify.app', // Replace with your Netlify domain
    credentials: true,
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true, // Ensures the cookie is only used over HTTPS
        httpOnly: true // Ensures the cookie is not accessible via JavaScript
    }
}));
app.use(passport.initialize());
app.use(passport.session());

// Use the auth routes
app.use('/auth', authRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
