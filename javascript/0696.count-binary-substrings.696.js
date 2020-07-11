/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = 0;
    let leftChar = s[0];
    let index = 1;
    while(index<s.length && s[index] === leftChar){
        index++;
    }
    let leftCount = index;
    // leftCount rightCount表示有几个连续的相同的值
    while(index<s.length){
        let rightCount = 1;
        let rightChar = s[index];
        index++;
        while(index<s.length && s[index] === rightChar){
            index++;
            rightCount++;
        }
        count += Math.min(leftCount,rightCount);
        leftCount = rightCount;
    }
    
    
    return count;
};