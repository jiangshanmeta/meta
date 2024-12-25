import fs from 'fs';
import path from 'path';

const containExt = (exts:string[]) => {
    return (answers:string[]) => {
        return answers.some((answer) => {
            return exts.includes(answer.split('.').pop()!);
        });
    };
};

const containJavaAnswer = containExt(['java', ]);

const containTSOrTS = containExt(['js', 'ts', ]);

const dirList = fs.readdirSync(path.join(__dirname, '../src'));
dirList.forEach((dirName) => {
    const answers = fs.readdirSync(path.join(__dirname, '../src', dirName));
    const hasJava = containJavaAnswer(answers);
    if (!hasJava) {
        return;
    }
    const hasTSOrJS = containTSOrTS(answers);
    if (!hasTSOrJS) {
        console.log(dirName);
    }
});
