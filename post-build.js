const fs = require('fs');
const path = require('path');

const deleteFolderRecursive = (folderPath) => {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
};

const deleteFileOrFolder = (filePath) => {
    if (fs.existsSync(filePath)) {
        if (fs.lstatSync(filePath).isDirectory()) {
            deleteFolderRecursive(filePath);
        } else {
            fs.unlinkSync(filePath);
        }
    } else {
        console.log(`Path ${filePath} does not exist.`);
    }
};

const pathsToDelete = [
    'client/src/components',
    'client/src/assets',
    'client/src/index.js',
    'client/src/index.css',
    'client/src/App.js',
    'client/src/App.css',
    'client/src/custom-scrollbar.css',
    'client/.idea',
    'client/.git',
    'client/.gitignore',
    'client/node_modules'
    // Add other folders or files you want to delete
];

pathsToDelete.forEach((filePath) => {
    const fullPath = path.join(__dirname, filePath);
    try {
        deleteFileOrFolder(fullPath);
    } catch (error) {
        console.error(`Error deleting ${fullPath}:`, error);
    }
});

console.log('Post-build cleanup complete.');
