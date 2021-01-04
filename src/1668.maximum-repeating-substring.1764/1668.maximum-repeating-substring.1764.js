/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let result = 0;
    let flag = true;
    while(flag){
        if(sequence.includes(word.repeat(result+1))){
            result++;
        }else{
            flag = false;
        }
    }
    return result
};