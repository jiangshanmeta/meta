import fs from 'fs';
import path from 'path';
import readline from 'readline';
import questions from './question.json';
import { genFolderName, } from './common';
import { languages, } from './config';
import { Question, } from './typing';

const questionMap = questions.reduce<Record<string, Question>>((obj, item) => {
    obj[item.title_slug] = item;
    return obj;
}, Object.create(null));

const extSet = new Set(languages.map(item => item.ext));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getQuestionByTitleSlug () {
    return new Promise<Question>((resolve) => {
        rl.question('title_slug? ', (title_slug) => {
            title_slug = title_slug.trim();
            const question = questionMap[title_slug];
            console.log(question);
            if (!question) {
                console.log('没有对应的问题');
                resolve(getQuestionByTitleSlug());
            } else {
                resolve(question);
            }
        });
    });
}

function getExts () {
    return new Promise<string[]>((resolve) => {
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

function append (question:Question, exts:string[]) {
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
        const question = await getQuestionByTitleSlug();
        const exts = await getExts();
        append(question, exts);
    }
}

main();
