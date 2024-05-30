const fs = require('fs');
const path = require('path');

// Function to delete a folder recursively
const deleteFolderRecursive = (folderPath) => {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const currentPath = path.join(folderPath, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
                // Recurse into a subdirectory
                deleteFolderRecursive(currentPath);
            } else {
                // Delete file
                fs.unlinkSync(currentPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
};

// Paths to the directories and files to be deleted
const pathsToDelete = [
    path.join(__dirname, 'client/src/components'),
    path.join(__dirname, 'client/src/assets'),
    path.join(__dirname, 'client/src/index.js'),
    path.join(__dirname, 'client/src/index.css'),
    path.join(__dirname, 'client/src/App.js'),
    path.join(__dirname, 'client/src/App.css'),
    path.join(__dirname, 'client/src/custom-scrollbar.css'),
    path.join(__dirname, 'client/.gitignore'),
    path.join(__dirname, 'client/.idea'),
    path.join(__dirname, 'client/.git'),
];

// Delete specified directories and files
pathsToDelete.forEach((deletePath) => {
    deleteFolderRecursive(deletePath);
    console.log(`Deleted: ${deletePath}`);
});

console.log('Post-build cleanup complete.');
