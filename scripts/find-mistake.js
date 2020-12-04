const fs = require('fs');
const path = require('path');
const questions = require('./question.json');
const languages = require('./config').languages;

const languageMap = languages.reduce((obj, item) => {
    obj[item.ext] = true;
    return obj;
}, {});

const questionsMap = questions.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
}, {});

const dirList = fs.readdirSync(path.join(__dirname, '../src'));
dirList.forEach((folderName) => {
    const questionId = folderName.split('.').pop();
    const questionObj = questionsMap[questionId];
    if (!questionObj) {
        console.log(questionId, folderName, '问题不存在');
        return;
    }

    const expectFolderName = `${questionObj.index}.${questionObj.title_slug}.${questionObj.id}`;

    if (folderName !== expectFolderName) {
        console.log(questionId, folderName, expectFolderName, '子目录名错误');
        return;
    }

    const fileList = fs.readdirSync(path.join(__dirname, '../src', expectFolderName));
    fileList.forEach((fileName) => {
        const ext = fileName.split('.').pop();
        if (!languageMap[ext]) {
            return;
        }
        const expectFileName = `${expectFolderName}.${ext}`;
        if (fileName !== expectFileName) {
            console.log('文件名错误', fileName, expectFileName);
        }
    });
});

// languages.forEach(({ dir, ext, }) => {
//     fs.readdir(dir, (err, fileList) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         fileList.forEach((fileName) => {
//             const id = +fileName.split('.')[2];
//             const question = questionsMap[id];
//             if (!question) {
//                 console.log(fileName);
//                 return;
//             }
//             if (fileName !== `${question.index}.${question.title_slug}.${question.id}.${ext}`) {
//                 console.log(fileName);
//             }
//         });
//     });
// });
