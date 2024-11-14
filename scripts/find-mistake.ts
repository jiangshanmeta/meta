import fs from 'fs';
import path from 'path';
import { genFolderName, } from './common';
import questions from './question.json';
import { Question, } from './typing';

const questionsMap = questions.reduce<Record<number, Question>>((obj, item) => {
    obj[item.id] = item;
    return obj;
}, {});

const dirList = fs.readdirSync(path.join(__dirname, '../src'));
dirList.forEach((folderName) => {
    const questionId = +folderName.split('.').pop()!;
    const questionObj = questionsMap[questionId];
    if (!questionObj) {
        console.log(questionId, folderName, '问题不存在');
        return;
    }

    const expectFolderName = genFolderName(questionObj);
    if (folderName === expectFolderName) {
        return;
    }

    console.log(questionId, folderName, expectFolderName, '子目录名错误');

    if (!fs.existsSync(path.join(__dirname, '../src', expectFolderName))) {
        console.log(expectFolderName, '-----');
        fs.rename(
            path.join(__dirname, '../src', folderName),
            path.join(__dirname, '../src', expectFolderName),
            (err) => {
                if (err) {
                    console.error(err);
                }
            }
        );
    } else {
        const subdir = fs.readdirSync(path.join(__dirname, '../src', folderName));

        subdir.forEach((filename) => {
            fs.rename(
                path.join(__dirname, '../src', folderName, filename),
                path.join(__dirname, '../src', expectFolderName, filename),
                (err) => {
                    if (err) {
                        console.error(err);
                    }
                }

            );
        });
    }
});
