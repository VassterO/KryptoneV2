const fs = require('fs');
const path = require('path');

// Function to delete a folder recursively
const deleteFolderRecursive = (folderPath) => {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const currentPath = path.join(folderPath, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
                deleteFolderRecursive(currentPath);
            } else {
                fs.unlinkSync(currentPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
};

// Paths to the directories and files to be deleted
const pathsToDelete = [
    path.join(__dirname, 'src/components'),
    path.join(__dirname, 'src/assets'),
    path.join(__dirname, 'src/index.js'),
    path.join(__dirname, 'src/index.css'),
    path.join(__dirname, 'src/App.js'),
    path.join(__dirname, 'src/App.css'),
    path.join(__dirname, 'src/custom-scrollbar.css'),
    path.join(__dirname, '.gitignore'),
    path.join(__dirname, '.idea'),
    path.join(__dirname, '.git'),
];

// Delete specified directories and files
pathsToDelete.forEach((deletePath) => {
    deleteFolderRecursive(deletePath);
    console.log(`Deleted: ${deletePath}`);
});

console.log('Post-build cleanup complete.');
