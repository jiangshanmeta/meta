const fs = require('fs');
const questions = require('../metaData/question.json');
const languages = require('./config').languages;

const questionsMap = questions.reduce((obj,item)=>{
    obj[item.index] = item;
    return obj;
},{});

languages.forEach(({dir,ext})=>{
    fs.readdir(dir,(err,fileList)=>{
        fileList.forEach((fileName)=>{
            const questionId = fileName.slice(0,fileName.indexOf('.'));
            const questionObj = questionsMap[+questionId];
            if(!questionObj){
                console.log(questionId,fileName);
                return
            }
            if(fileName !== `${questionId}.${questionObj.title_slug}.${ext}`){
                console.log(fileName);
            }
        });
    });
});


