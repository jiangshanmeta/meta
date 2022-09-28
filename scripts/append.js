const {
    genFolderName,
} = require('./common');

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

    const exts = process.argv.slice(3);
    const folderName = genFolderName(question);
    const folderDir = path.join(__dirname, '../src', folderName);
    for (const ext of exts) {
        if (!extSet.has(ext)) {
            console.log('扩展名无效');
            continue;
        }

        if (!fs.existsSync(folderDir)) {
            fs.mkdirSync(folderDir);
        }

        const fileName = `solution.${ext}`;
        const file = path.join(__dirname, `../src/${folderName}/${fileName}`);
        if (fs.existsSync(file)) {
            console.log('文件已存在');
            continue;
        }

        fs.writeFileSync(file, '');
    }
}

append();
