const fs = require('fs');
const path = require('path');
const questions = require('./question.json');
const languages = require('./config').languages;
const { genFolderName, } = require('./common');

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

    const expectFolderName = genFolderName(questionObj);

    if (folderName !== expectFolderName) {
        console.log(questionId, folderName, expectFolderName, '子目录名错误');
    }
});
