const fs = require('fs');
const path = require('path');
// console.log(path.join(__dirname, '../src'));
// return;

const fileDirs = fs.readdirSync(path.join(__dirname, '../src'));
console.log(fileDirs);
fileDirs.forEach((fileDir) => {
    const files = fs.readdirSync(path.join(__dirname, '../src', fileDir));
    files.forEach((file) => {
        const ext = file.split('.').pop();
        const newName = path.join(__dirname, '../src', fileDir, `solution.${ext}`);
        // console.log(path.join(__dirname, '../src', fileDir, file), newName);

        fs.renameSync(
            path.join(__dirname, '../src', fileDir, file),
            newName
        );
    });
});
