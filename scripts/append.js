function append () {
    const fs = require('fs');
    const path = require('path');
    const questions = require('./question.json');
    const questionMap = questions.reduce((obj, item) => {
        obj[item.title_slug] = item;
        return obj;
    }, Object.create(null));

    const languages = require('./config').languages;
    const extSet = new Set(languages.map(item => item.ext));

    const title_slug = process.argv[2];
    const question = questionMap[title_slug];
    console.log(question);
    if (!question) {
        console.log('没有对应的问题');
        return;
    }

    const ext = process.argv[3];
    if (!extSet.has(ext)) {
        console.log('扩展名无效');
        return;
    }

    const folderName = `${question.index}.${question.title_slug}.${question.id}`;
    const folderDir = path.join(__dirname, '../src', folderName);
    if (!fs.existsSync(folderDir)) {
        fs.mkdirSync(folderDir);
    }

    const fileName = `${folderName}.${ext}`;
    const file = path.join(__dirname, `../src/${folderName}/${fileName}`);
    if (fs.existsSync(file)) {
        console.log('文件已存在');
        return;
    }

    fs.writeFileSync(file, '');
}

append();
