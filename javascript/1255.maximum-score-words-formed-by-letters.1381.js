/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    // 转换成每一个letter需要多少个
    words = words.map((word)=>{
        const counts = new Array(26).fill(0);
        for(let i=0;i<word.length;i++){
            counts[word.charCodeAt(i)-97]++
        }
        return counts;
    });
    // letters转化成每一个letter需要多少个
    const provideCounts = new Array(26).fill(0);
    for(let i=0;i<letters.length;i++){
        provideCounts[letters[i].charCodeAt(0)-97]++;
    }

    return backTracking(words,new Array(26).fill(0),score,0,provideCounts);
};

// 核心就是回溯啊
function backTracking(words,used,score,index,provideCounts){
    // 回溯完成
    if(index === words.length){
        return countScore(used,score);
    }
    // 至少当前used是小于provide的，所以用来初始化
    let result = countScore(used,score);
    while(index<words.length){
        const word = words[index];
        // 算上word 需要多少
        let greaterFlag = false;
        for(let i=0;i<26;i++){
            used[i] += word[i];
            if(used[i]>provideCounts[i]){
                greaterFlag = true;
            }
        }
        // 没超就继续回溯
        if(!greaterFlag){
            result = Math.max(result,backTracking(words,used,score,index+1,provideCounts));
        }
        for(let i=0;i<26;i++){
            used[i] -= word[i];
        }
        index++;
    }
    return result;
}


function countScore(used,score){
    let result = 0;
    for(let i=0;i<26;i++){
        result += used[i]*score[i];
    }
    return result;
}