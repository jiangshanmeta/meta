// @deprecated
const fs = require('fs');
const questions = require('../metaData/question.json');
const languages = require('./config').languages;

const questionMap = questions.reduce((obj, item) => {
    obj[item.id] = item;
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
            if (!fileName.includes(' ')) {
                return;
            }
            const id = fileName.split('.')[2];
            const question = questionMap[id];

            fs.renameSync(`${dir}/${fileName}`, `${dir}/${question.index}.${question.title_slug}.${question.id}.${ext}`);
        });
    });
});
