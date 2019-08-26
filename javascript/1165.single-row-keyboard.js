/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    // hash
    const indexMap = {};
    for(let i=0;i<keyboard.length;i++){
        indexMap[keyboard[i]] = i;
    }
    let result = 0;
    let lastIndex = 0;
    for(let i=0;i<word.length;i++){
        const curIndex = indexMap[word[i]];
        result += Math.abs(curIndex-lastIndex);
        lastIndex = curIndex;
    }
    return result;
};