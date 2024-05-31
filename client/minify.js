const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const terser = require('terser');

const directory = join(__dirname, 'build', 'static', 'js');

readdirSync(directory).forEach(file => {
    if (file.endsWith('.js')) {
        const filePath = join(directory, file);
        const result = terser.minify(readFileSync(filePath, 'utf8'), {
            compress: true,
            mangle: true
        });

        if (result.error) {
            console.error('Error minifying', filePath, result.error);
        } else {
            writeFileSync(filePath, result.code, 'utf8');
            console.log('Minified', filePath);
        }
    }
});
