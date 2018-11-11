/**
 * @param {string[]} logs
 * @return {string[]}
 */
const map = {
    0:true,
    1:true,
    2:true,
    3:true,
    4:true,
    5:true,
    6:true,
    7:true,
    8:true,
    9:true,
};


var reorderLogFiles = function(logs) {
    const lettersArr = [];
    const digitsArr = [];
    const letterMap = {};
    
    // 先按照类型分类
    for(let i=0;i<logs.length;i++){
        const word = logs[i];
        const firstSpace = word.indexOf(" ");
        if(map[word[firstSpace+1]]){
            digitsArr.push(word);
        }else{
            letterMap[word] = word.slice(firstSpace+1);
            lettersArr.push(word);
        }
    }
    // 字符型按字典序排序
    lettersArr.sort((a,b)=>letterMap[a]>letterMap[b]?1:-1);
    return lettersArr.concat(digitsArr);
};