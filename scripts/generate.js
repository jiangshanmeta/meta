const fs = require('fs');

const {
    languages,
    difficultyMap,
} = require('./config');

const questions = require('../metaData/question.json');

const readdir = Promise.all(languages.map(({dir,label})=>{
    const urlDir = dir.substring(dir.indexOf("/"));
    return new Promise((resolve)=>{
        fs.readdir(dir,(err,fileList)=>{
            if(err){
                console.log(err);
                return;
            }
            
            const list = fileList.map((name)=>{
                const id = +name.split('.')[2];
                return {
                    id,
                    label,
                    name,
                    dir:urlDir,
                };
            });
            resolve(list);
        });
    });
}));



readdir.then((answerDir)=>{
    const groupById = {};
    for(let i=0;i<languages.length;i++){
        const answers = answerDir[i];
        for(let j=0;j<answers.length;j++){
            const id = answers[j].id;
            (groupById[id] || (groupById[id] = [])).push(answers[j]);
        }
    }

    const mergedQuestions = questions.map((question)=>{
        const id = question.id;
        const index = question.index;

        const answers = (groupById[id] || []).map((answer)=>{
            return `[${answer.label}](.${answer.dir}/${answer.name})`;
        }).join(" ");
    
        return `| ${index} | ${question.title} | ${answers} | ${difficultyMap[question.difficulty]} |`;
    }).join("\n");

    const prefix = fs.readFileSync("./_prefix.md",'utf8');

    fs.writeFile('../README.md', prefix+mergedQuestions+'\n', 'utf8', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });

})