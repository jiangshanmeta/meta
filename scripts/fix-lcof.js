// @deprecated
const questions = require('../metaData/question.json');
const fs = require('fs');
const lcofQuestions = questions.filter(item => item.title_slug.endsWith('lcof'));
const questionMap = lcofQuestions.reduce((obj, item) => {
    obj[item.title_slug] = item;
    return obj;
}, Object.create(null));

fs.readdir('../javascript', (err, fileList) => {
    if (err) {
        console.log(err);
        return;
    }
    fileList.forEach((fileName) => {
        const title_slug = fileName.slice(fileName.indexOf('.') + 1, fileName.lastIndexOf('.'));
        const questionItem = questionMap[title_slug];
        if (!questionItem) {
            console.log(fileName);
            return;
        }
        fs.renameSync(`../javascript/${fileName}`, `../javascript/${questionItem.index}.${questionItem.title_slug}.js`);
    });
});
