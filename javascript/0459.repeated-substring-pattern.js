/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var sLen = s.length;
    if(sLen<2){
        return false;
    }
    var half = Math.floor(sLen/2) + 1;
    var firstChar = s[0];
    var index = 0;
    
    while(index<half){
        index++;
        index = s.indexOf(firstChar,index);
        // 没有找到        
        if(index === -1){
            return false;
        }
        // 长度要是整数倍         
        if(sLen%index !== 0){
            continue;
        }

        if(s.slice(0,index).repeat(sLen/index) === s){
            return true;
        }
    }
    return false;
};