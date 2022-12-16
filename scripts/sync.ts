import fs from 'fs';
import path from 'path';
import { getQuestions, } from './common';

const syncedIdSet = new Set(fs.readdirSync(path.join(__dirname, '../src')).map(folderName => +folderName.split('.').pop()!));

getQuestions(true).then(({ stat_status_pairs, }) => {
    const unsyncQuestions = stat_status_pairs.filter((item) => {
        const id = item.stat.question_id;
        const status = item.status;

        if (status === 'ac' && !syncedIdSet.has(id)) {
            return true;
        }
        return false;
    }).map(item => item.stat.question__title_slug);
    if (unsyncQuestions.length) {
        fs.writeFile(path.join(__dirname, './TODO.json'), JSON.stringify(unsyncQuestions, null, 4), 'utf8', (err) => {
            if (err) {
                throw err;
            }
            console.log('文件已被保存');
        });
    } else {
        console.log('问题已全部同步');
    }
});
