import fs from 'fs';
import path from 'path';

function clearEmptyDir () {
    const dirList = fs.readdirSync(path.join(__dirname, '../src'));

    dirList.forEach((folderName) => {
        const fullpath = path.join(__dirname, '../src', folderName);
        const subdir = fs.readdirSync(fullpath);
        if (subdir.length === 0) {
            console.log(folderName);
            fs.rmdirSync(fullpath);
        }
    });
}

clearEmptyDir();
