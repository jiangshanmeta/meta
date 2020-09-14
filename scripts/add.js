// @deprecated
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('题号？ ', (index) => {
    rl.question('title? ', (title) => {
        rl.question('difficulty 1=>Easy  2=>Medium   3=>Hard ', (difficulty) => {
            const newData = {
                index: +index,
                title: title,
                difficulty: +difficulty,
            };
            rl.close();

            fs.readFile('../metaData/question.json', 'utf8', (err, data) => {
                if (err) throw err;
                const list = JSON.parse(data);
                let low = 0;
                let high = list.length - 1;
                let index = list.length;
                while (low <= high) {
                    const mid = (low + high) >> 1;
                    if (list[mid].index === newData.index) {
                        return console.error('题目重复');
                    } else if (list[mid].index < newData.index) {
                        low = mid + 1;
                    } else {
                        index = Math.min(index, mid);
                        high = mid - 1;
                    }
                }
                list.splice(index, 0, newData);

                const fmtData = JSON.stringify(list, null, 4);

                fs.writeFile('../metaData/question.json', fmtData, 'utf8', (err) => {
                    if (err) throw err;
                    console.log('文件已被保存');
                });
            });
        });
    });
});
