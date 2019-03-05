/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 第一个非空的位置
    let startIndex = 0;
    while(startIndex<s.length && s[startIndex] === ' '){
        startIndex++;
    }
    const result = [];
    while(startIndex<s.length){
        // 找到一个word
        let endIndex = startIndex+1;
        while(endIndex<s.length && s[endIndex] !== ' '){
            endIndex++;
        }
        result.unshift(s.substring(startIndex,endIndex));
        
        // 处理word后面的空格
        startIndex = endIndex;
        while(startIndex<s.length && s[startIndex] === ' '){
            startIndex++;
        }
    }
    return result.join(" ");
};