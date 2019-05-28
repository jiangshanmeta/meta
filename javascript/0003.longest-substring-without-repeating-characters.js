/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // map记录每个字母出现的最后位置
    const map = {};
    let max = 0;
    let cur = 0;
    for(let i=0;i<s.length;i++){
        // i-cur是当前子串的起始位置
        if(map[s[i]] !== undefined && map[s[i]]>i-cur-1 ){
            cur = i-map[s[i]];
        }else{
            cur++;
            if(cur>max){
                max = cur;
            }
        }
        map[s[i]] = i;
    }
    return max;
};