const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const terser = require('terser');

const directory = join(__dirname, 'build', 'static', 'js');

async function minifyFiles() {
    const files = readdirSync(directory);

    for (const file of files) {
        if (file.endsWith('.js')) {
            const filePath = join(directory, file);
            const fileContents = readFileSync(filePath, 'utf8');
            try {
                const result = await terser.minify(fileContents, {
                    compress: true,
                    mangle: true
                });

                if (result.error) {
                    console.error('Error minifying', filePath, result.error);
                } else if (result.code === undefined) {
                    console.error('Error: Minification result is undefined for', filePath, result);
                } else {
                    writeFileSync(filePath, result.code, 'utf8');
                    console.log('Minified', filePath);
                }
            } catch (err) {
                console.error('Error minifying', filePath, err);
            }
        }
    }
}

minifyFiles().then(() => {
    console.log('Minification complete.');
}).catch(err => {
    console.error('Error during minification process:', err);
});
