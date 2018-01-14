/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLen = 0;
    // startIndex 是左界
    var startIndex = 0;
    var hash = {};
    var item;
    // i是右界
    for(var i=0;i<s.length;i++){
        item = s[i];
        if(!hash[item]){
            hash[item] = true;
        }else{
            // 第i个元素与第k(startIndex=<k<i)个元素重复,
            // 则以startIndex到k为开头的满足条件子串长度都不大于以startIndex为开头的子串
            // 新的开头为k+1

            while(true){
                // 第k个元素
                if(s[startIndex] === item){
                    startIndex++;
                    break;
                }
                // 第k个元素之前的元素
                hash[s[startIndex]] = false;
                startIndex++;
            }

        }
        maxLen = Math.max(maxLen,i- startIndex +1);
    }
    return maxLen;
};