/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    // 最多s.length个
    if(s.length<k){
        return false;
    }
    
    const counts = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        counts[s.charCodeAt(i)-97]++; 
    }
    // 最少 s频次为奇数的字符的数量
    let minCount = 0;

    for(let i=0;i<26;i++){
        if(counts[i] & 1){
            minCount++;
        }
    }
    return k>=minCount;
};