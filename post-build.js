const fs = require('fs');
const path = require('path');

const deleteFolderRecursive = (folderPath) => {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file, index) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    } else if (fs.lstatSync(folderPath).isFile()) {
        fs.unlinkSync(folderPath);
    }
};

const pathsToDelete = [
    'client/src',
    'client/.idea',
    'client/node_modules',
    'client/public',
    'client/.git',
    'client/.gitignore',
    // Add other folders or files you want to delete
];

pathsToDelete.forEach((filePath) => {
    const fullPath = path.join(__dirname, filePath);
    try {
        if (fs.existsSync(fullPath)) {
            deleteFolderRecursive(fullPath);
        } else {
            console.log(`Path ${fullPath} does not exist.`);
        }
    } catch (error) {
        console.error(`Error deleting ${fullPath}:`, error);
    }
});

console.log('Post-build cleanup complete.');
