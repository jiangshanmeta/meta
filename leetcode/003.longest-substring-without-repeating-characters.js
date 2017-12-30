/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLen = 0;
    var sLen = s.length;
    var set;
    var curLength;
    var item;
    for(var i=0;i<sLen;i++){
        set = Object.create(null);
        curLength = 0;
        for(var j=i;j<sLen;j++){
            item = s[j];
            if(!set[item]){
                set[item] = item;
                curLength++;
            }else{
                break;
            }
            
        }
        
        if(curLength>maxLen){
            maxLen = curLength
        }
        
        continue;
    }
    return maxLen;
};