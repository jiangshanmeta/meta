import fs from 'fs';
import path from 'path';
import { getQuestions, } from './common';
import { ProblemResponse, Question, } from './typing';

const lcof2FlagStr = '剑指 Offer II';
function writeLocalQuestion (json:ProblemResponse) {
    const questionList = json.stat_status_pairs.map((item) => {
        const stat = item.stat;

        const data = {
            id: stat.question_id,
            index: stat.frontend_question_id,
            title: stat.question__title,
            title_slug: stat.question__title_slug,
            difficulty: item.difficulty.level,
        };

        if (!Number.isNaN(+data.index)) {
            data.index = data.index.padStart(4, '0');
        }
        if (data.index.includes('.')) {
            data.index = data.index.replace('.', '_');
        }

        return data;
    });

    const algorithms:Question[] = [];
    const lcp:Question[] = [];
    // 剑指offer
    const lcof:Question[] = [];
    // 剑指offer II
    const lcof2:Question[] = [];
    // 程序员面试经典
    const lcci:Question[] = [];
    const lcs:Question[] = [];

    const lcr:Question[] = [];

    questionList.forEach((question) => {
        const index = question.index;
        const title_slug = question.title_slug;
        if (Number.isInteger(+index)) {
            algorithms.push(question);
        } else if (index.startsWith('LCP')) {
            lcp.push(question);
        } else if (title_slug.endsWith('lcof')) {
            lcof.push(question);
        } else if (title_slug.endsWith('lcci')) {
            lcci.push(question);
        } else if (index.startsWith('LCS')) {
            lcs.push(question);
        } else if (index.startsWith(lcof2FlagStr)) {
            lcof2.push(question);
        } else if (index.startsWith('LCR')) {
            lcr.push(question);
        } else {
            console.log(question);
        }
    });

    algorithms.sort((a, b) => (+a.index) - (+b.index));
    lcp.sort((a, b) => {
        const indexA = +a.index.split(' ')[1];
        const indexB = +b.index.split(' ')[1];
        return indexA - indexB;
    });
    const regex = /(\d+)/;
    lcof.sort((a, b) => {
        const indexA = +a.index.match(regex)![0];
        const indexB = +b.index.match(regex)![0];
        if (indexA !== indexB) {
            return indexA - indexB;
        }
        return a.index.length - b.index.length;
    });
    lcof2.sort((a, b) => {
        const indexA = +a.index.replace(lcof2FlagStr, '');
        const indexB = +b.index.replace(lcof2FlagStr, '');
        return indexA - indexB;
    });

    lcci.sort((a, b) => {
        const [indexA1, indexA2, ] = a.index.split(' ')[1].split('_');
        const [indexB1, indexB2, ] = b.index.split(' ')[1].split('_');

        if (indexA1 !== indexB1) {
            return (+indexA1) - (+indexB1);
        } else {
            return (+indexA2) - (+indexB2);
        }
    });

    lcs.sort((a, b) => {
        const indexA = +a.index.split(' ')[1];
        const indexB = +b.index.split(' ')[1];
        return indexA - indexB;
    });

    lcr.sort((a, b) => {
        const indexA = +a.index.split(' ')[1];
        const indexB = +b.index.split(' ')[1];
        return indexA - indexB;
    });

    const sortedList = [
        ...algorithms,
        ...lcp,
        ...lcof,
        ...lcof2,
        ...lcci,
        ...lcs,
        ...lcr,
    ];

    sortedList.forEach((data) => {
        if (data.index.includes(' ')) {
            data.index = data.index.replace(/\s/g, '');
        }
    });

    const fmtData = JSON.stringify(sortedList, null, 4);

    fs.writeFile(path.join(__dirname, './question.json'), fmtData, 'utf8', (err) => {
        if (err) {
            throw err;
        }
        console.log('文件已被保存');
    });
}

getQuestions().then(writeLocalQuestion);
