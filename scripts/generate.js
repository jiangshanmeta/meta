const fs = require('fs');

const languages = [
    {label:"JavaScript",dir:"../javascript"},
    {label:"Python3",dir:"../python"},
    {label:"Mysql",dir:"../sql"},
];

const difficultyMap = {
    1:"Easy",
    2:"Medium",
    3:"Hard",
}

const listPromise = new Promise((resolve)=>{
    fs.readFile('../metaData/question.json', 'utf8' ,(err, data) => {
        resolve(JSON.parse(data));
    });
});

const readdir = Promise.all(languages.map(({dir,label})=>{
    return new Promise((resolve)=>{
        fs.readdir(dir,(err,fileList)=>{
            const urlDir = dir.substring(dir.indexOf("/"));
            const list = fileList.map((name)=>{
                const index = parseInt(name.substring(0,name.indexOf(".")));
                return {
                    index,
                    label,
                    name,
                    dir:urlDir,
                };
            });
            resolve(list);
        });
    });
}));



Promise.all([listPromise,readdir]).then(([questions,answerDir])=>{
    const groupByIndex = {};
    for(let i=0;i<languages.length;i++){
        const answers = answerDir[i];
        for(let j=0;j<answers.length;j++){
            const index = answers[j].index;
            (groupByIndex[index] || (groupByIndex[index] = [])).push(answers[j]);
        }
    }

    const mergedQuestions = questions.map((question)=>{
        const index = question.index;

        const answers = (groupByIndex[index] || []).map((answer)=>{
            return `[${answer.label}](https://github.com/jiangshanmeta/meta/tree/master${answer.dir}/${answer.name})`;
        }).join(" ");
    
        return `| ${index} | ${question.title} | ${answers} | ${difficultyMap[question.difficulty]} |`;
    }).join("\n");

    const prefix = fs.readFileSync("./_prefix.md",'utf8');

    fs.writeFile('../README.md', prefix+mergedQuestions, 'utf8', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });

})