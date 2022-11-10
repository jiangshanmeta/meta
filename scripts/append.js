const fs = require('fs');
const path = require('path');
const readline = require('readline');
const questions = require('./question.json');

const {
    genFolderName,
} = require('./common');

const questionMap = questions.reduce((obj, item) => {
    obj[item.title_slug] = item;
    return obj;
}, Object.create(null));

const languages = require('./config').languages;
const extSet = new Set(languages.map(item => item.ext));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getTitleSlug () {
    return new Promise((resolve) => {
        rl.question('title_slug? ', (title_slug) => {
            title_slug = title_slug.trim();
            const question = questionMap[title_slug];
            console.log(question);
            if (!question) {
                console.log('没有对应的问题');
                resolve(getTitleSlug());
            } else {
                resolve(title_slug);
            }
        });
    });
}

function getExts () {
    return new Promise((resolve) => {
        rl.question('exts? ', (extstr) => {
            const exts = extstr.split(' ').filter(item => extSet.has(item));
            if (exts.length === 0) {
                resolve(getExts());
            } else {
                resolve(exts);
            }
        });
    });
}

function append (title_slug, exts) {
    const question = questionMap[title_slug];

    const folderName = genFolderName(question);
    const folderDir = path.join(__dirname, '../src', folderName);
    for (const ext of exts) {
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

async function main () {
    while (true) {
        const title_slug = await getTitleSlug();
        const exts = await getExts();
        append(title_slug, exts);
    }
}

main();
