const fs = require('fs');
const path = require('path');
const dirs = [
    '../javascript',
    '../python',
    '../sql',
    '../typescript',
];

dirs.forEach((dir) => {
    const fileList = fs.readdirSync(path.join(__dirname, dir));
    fileList.forEach((fileName) => {
        const name = fileName.split('.');
        name.pop();

        const dirPath = path.join(__dirname, '../src', name.join('.'));
        fs.mkdirSync(dirPath, {
            recursive: true,
        });
        fs.renameSync(
            path.join(__dirname, dir, fileName),
            path.join(dirPath, fileName)
        );
    });
});
