const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const terser = require('terser');
const { promisify } = require('util');

const readdir = promisify(readdirSync);
const readFile = promisify(readFileSync);
const writeFile = promisify(writeFileSync);

const directory = join(__dirname, 'build', 'static', 'js');

async function minifyFile(filePath) {
    try {
        const fileContents = await readFile(filePath, 'utf8');
        const result = await terser.minify(fileContents, {
            compress: true,
            mangle: true
        });

        if (result.error) {
            console.error('Error minifying', filePath, result.error);
        } else if (result.code === undefined) {
            console.error('Error: Minification result is undefined for', filePath, result);
        } else {
            await writeFile(filePath, result.code, 'utf8');
            console.log('Minified', filePath);
        }
    } catch (err) {
        console.error('Error reading or writing file', filePath, err);
    }
}

async function minifyFiles() {
    try {
        const files = await readdir(directory);

        const jsFiles = files.filter(file => file.endsWith('.js'));
        const minifyPromises = jsFiles.map(file => {
            const filePath = join(directory, file);
            return minifyFile(filePath);
        });

        await Promise.all(minifyPromises);
        console.log('Minification complete.');
    } catch (err) {
        console.error('Error during minification process:', err);
    }
}

minifyFiles();
