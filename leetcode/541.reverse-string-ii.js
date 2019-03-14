/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const result = [];
    let startIndex = 0;
    while(startIndex<s.length){
        // 处理前k个 需要翻转
        let endIndex = Math.min(startIndex+k-1,s.length-1);
        for(let i=endIndex;i>=startIndex;i--){
            result.push(s[i]);
        }
        startIndex += k;
        // 处理后k个 不需要翻转
        endIndex = Math.min(startIndex+k-1,s.length-1);
        for(let i=startIndex;i<=endIndex;i++){
            result.push(s[i]);
        }
        startIndex += k;
    }
    
    return result.join("");
};