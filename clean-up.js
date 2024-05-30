const fs = require('fs');
const path = require('path');

// Paths to be deleted
const pathsToDelete = [
    path.join(__dirname, 'client', 'src'),
    path.join(__dirname, 'client', 'node_modules'),
    path.join(__dirname, 'client', 'public'),
];

// Function to delete files and directories recursively
const deleteRecursively = (targetPath) => {
    if (fs.existsSync(targetPath)) {
        if (fs.lstatSync(targetPath).isDirectory()) {
            fs.readdirSync(targetPath).forEach((file) => {
                const curPath = path.join(targetPath, file);
                deleteRecursively(curPath);
            });
            fs.rmdirSync(targetPath);
        } else {
            fs.unlinkSync(targetPath);
        }
    }
};

// Clean up specified paths
pathsToDelete.forEach(deleteRecursively);

console.log('Clean-up completed after build');
