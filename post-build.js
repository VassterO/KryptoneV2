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
    }
};

const foldersToDelete = [
    'client/src',
    'client/.idea',
    'client/node_modules',
    'client/static',
    'client/webpack',
    // add other folders if necessary
];

foldersToDelete.forEach(folder => {
    const folderPath = path.join(__dirname, folder);
    deleteFolderRecursive(folderPath);
});

console.log('Post-build cleanup complete.');
