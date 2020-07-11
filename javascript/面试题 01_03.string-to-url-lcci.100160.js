/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
    const result = [];
    let index = 0;
    while(index<length){
        if(S[index] === ' '){
            result.push('%20');
        }else{
            result.push(S[index]);
        }
        index++;
    }
    return result.join('');
};