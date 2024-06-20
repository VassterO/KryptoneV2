const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const terser = require('terser');
const CleanCSS = require('clean-css');

// Directories for JS and CSS files
const jsDirectory = join(__dirname, 'build', 'static', 'js');
const cssDirectory = join(__dirname, 'build', 'static', 'css');

async function minifyJsFile(filePath) {
    try {
        const fileContents = readFileSync(filePath, 'utf8');
        const result = await terser.minify(fileContents, {
            compress: true,
            mangle: true
        });

        if (result.error) {
            console.error('Error minifying', filePath, result.error);
        } else if (result.code === undefined) {
            console.error('Error: Minification result is undefined for', filePath);
        } else {
            writeFileSync(filePath, result.code, 'utf8');
            console.log('Minified', filePath);
        }
    } catch (err) {
        console.error('Error reading or writing file', filePath, err);
    }
}

function minifyCssFile(filePath) {
    try {
        const fileContents = readFileSync(filePath, 'utf8');
        const result = new CleanCSS().minify(fileContents);

        if (result.errors.length > 0) {
            console.error('Error minifying', filePath, result.errors);
        } else {
            writeFileSync(filePath, result.styles, 'utf8');
            console.log('Minified', filePath);
        }
    } catch (err) {
        console.error('Error reading or writing file', filePath, err);
    }
}

function minifyFiles() {
    try {
        // Minify JS files
        const jsFiles = readdirSync(jsDirectory).filter(file => file.endsWith('.js'));
        jsFiles.forEach(file => {
            const filePath = join(jsDirectory, file);
            minifyJsFile(filePath);
        });

        // Minify CSS files
        const cssFiles = readdirSync(cssDirectory).filter(file => file.endsWith('.css'));
        cssFiles.forEach(file => {
            const filePath = join(cssDirectory, file);
            minifyCssFile(filePath);
        });

        console.log('Minification complete.');
    } catch (err) {
        console.error('Error during minification process:', err);
    }
}

minifyFiles();
