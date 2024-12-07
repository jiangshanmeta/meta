import fs from 'fs';
import path from 'path';
import { difficultyMap, languages, } from './config';
import { genFolderName, } from './common';
import questions from './question.json';

const extLabelMap = languages.reduce<Record<string, string>>((obj, { label, ext, }) => {
    obj[ext] = label;
    return obj;
}, {});

const fileList = fs.readdirSync(path.join(__dirname, '../src'));

const answersMap = fileList.reduce<Record<string, string[]>>((obj, dirName) => {
    const answers = fs.readdirSync(path.join(__dirname, '../src', dirName));
    obj[dirName.split('.')[0]] = answers;
    return obj;
}, {});

let totalJava = 0;
let totalTSOrJS = 0;

const mergedQuestions = questions.map((question) => {
    const {
        index,
        title,
        difficulty,
    } = question;

    let hasJava = false;
    let hasTSOrJS = false;

    const answers = (answersMap[index] || []).filter((answerFileName) => {
        // 未来考虑添加md做题解
        const ext = answerFileName.split('.').pop()!;
        return extLabelMap[ext];
    }).map((answerFileName) => {
        const name = answerFileName.split('.');
        const ext = name.pop()!;
        const label = extLabelMap[ext];
        if (ext === 'java') {
            hasJava = true;
        }
        if (ext === 'js' || ext === 'ts') {
            hasTSOrJS = true;
        }

        return `[${label}](./src/${genFolderName(question)}/${answerFileName})`;
    }).join(' ');

    if (hasJava) {
        totalJava++;
    }
    if (hasTSOrJS) {
        totalTSOrJS++;
    }

    return `| ${index} | ${title} | ${answers} | ${difficultyMap[difficulty]}  |`;
}).join('\n');

let prefix = fs.readFileSync(path.join(__dirname, './_prefix.md'), 'utf8');

prefix = prefix.replace('{{totalTSOrJS}}', totalTSOrJS.toString());
prefix = prefix.replace('{{totalJava}}', totalJava.toString());

fs.writeFile(path.join(__dirname, '../README.md'), prefix + mergedQuestions + '\n', 'utf8', (err) => {
    if (err) throw err;
    console.log('文件已被保存');
});
