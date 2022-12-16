import https from 'https';
import { cookie, } from './cookie';
import { ProblemResponse, Question, } from './typing';

export const genFolderName = (question:Question) => {
    return `${question.index}.${question.title_slug}.${question.id}`;
};

export function getQuestions (withCookie = false) {
    return new Promise<ProblemResponse>((resolve) => {
        https.get('https://leetcode.cn/api/problems/all/', withCookie ? {
            headers: {
                Cookie: cookie,
            },
        } : {}, (res) => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch (e) {
                    console.error((e as Error).message);
                }
            });
        }).on('error', (e) => {
            console.error(`出现错误: ${e.message}`);
        });
    });
}
