const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const cssFiles = [
    './src/styles/ItemsWiki.css',
    './src/styles/Ranks.css',
    './src/styles/OurStaff.css',
    './src/styles/Footer.css',
    './src/styles/Home.css',
    './src/styles/Navbar.css',
    './src/styles/Profile.css'
];

const hashFile = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const hash = crypto.createHash('sha256').update(fileContent, 'utf8').digest('base64');
    return `sha256-${hash}`;
};

const generateHashes = () => {
    const hashes = cssFiles.reduce((acc, file) => {
        const hash = hashFile(path.join(__dirname, file));
        acc[path.basename(file)] = hash;
        return acc;
    }, {});

    fs.writeFileSync(path.join(__dirname, 'cspHashes.json'), JSON.stringify(hashes, null, 2));
};

generateHashes();
