const fs = require("fs");
const https = require("https");
// level 1=>Easy 2=>Medium   3=>Hard

function getQuestions(){
    return new Promise((resolve)=>{
        https.get('https://leetcode.com/api/problems/all/', (res) => {
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
                    console.error(e.message);
                }
            });
        }).on('error', (e) => {
            console.error(`出现错误: ${e.message}`);
        });
    });
}


function writeLocalQuestion(json){
    const list = json.stat_status_pairs.map((item)=>{
        const data = {};
        const stat = item.stat;
        data.index = stat.frontend_question_id;
        data.title = stat.question__title;
        data.title_slug = stat.question__title_slug;
        data.difficulty = item.difficulty.level;
        return data;
    }).sort((a,b)=>a.index-b.index);

    const fmtData = JSON.stringify(list,null,4);

    fs.writeFile('../metaData/question.json', fmtData, 'utf8', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });
}


getQuestions().then(writeLocalQuestion);