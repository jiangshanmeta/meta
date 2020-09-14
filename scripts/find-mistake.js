const fs = require('fs');
const questions = require('../metaData/question.json');
const languages = require('./config').languages;

const questionsMap = questions.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
}, {});

languages.forEach(({ dir, ext, }) => {
    fs.readdir(dir, (err, fileList) => {
        if (err) {
            console.log(err);
            return;
        }

        fileList.forEach((fileName) => {
            const id = +fileName.split('.')[2];
            const question = questionsMap[id];
            if (!question) {
                console.log(fileName);
                return;
            }
            if (fileName !== `${question.index}.${question.title_slug}.${question.id}.${ext}`) {
                console.log(fileName);
            }
        });
    });
});
