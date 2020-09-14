// @deprecated
const fs = require('fs');
const questions = require('../metaData/question.json');
const languages = require('./config').languages;

const questionMap = questions.reduce((obj, item) => {
    obj[item.index] = item;
    return obj;
}, Object.create(null));

languages.forEach(({
    dir, ext,
}) => {
    fs.readdir(dir, (err, fileList) => {
        if (err) {
            console.log(err);
            return;
        }
        fileList.forEach((fileName) => {
            const question = questionMap[fileName.slice(0, fileName.indexOf('.'))];
            if (!question) {
                console.log(fileName);
                return;
            }

            fs.renameSync(`${dir}/${fileName}`, `${dir}/${question.index}.${question.title_slug}.${question.id}.${ext}`);
        });
    });
});
