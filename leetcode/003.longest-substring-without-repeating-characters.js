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
            // 从startIndex到i只重复i对应元素
            // 但是要满足i在子串内，需要移动左边界
            // 要满足 i对应元素在内，移动左边界

            while(true){
                // startIndex对应元素和i对应元素一致
                // 删除startIndex后就是一个不重复的子串了
                if(s[startIndex] === item){
                    startIndex++;
                    break;
                }
                hash[s[startIndex]] = false;
                startIndex++;
            }

        }
        maxLen = Math.max(maxLen,i- startIndex +1);
    }
    return maxLen;
};