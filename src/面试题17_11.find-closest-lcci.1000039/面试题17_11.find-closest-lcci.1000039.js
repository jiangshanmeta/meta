/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
    if(word1 === word2){
        return 0;
    }
    let result = words.length;
    let index1 = -1;
    let index2 = -1;
    for(let i=0;i<words.length;i++){
        if(words[i] === word1){
            index1 = i;
            if(index2 !== -1){
                result = Math.min(result,index1-index2);
            }
        }else if(words[i] === word2){
            index2 = i;
            if(index1 !== -1){
                result = Math.min(result,index2-index1);
            }
        }
    }
    return result;
};