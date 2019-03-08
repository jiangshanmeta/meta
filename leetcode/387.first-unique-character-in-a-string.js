/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // countBy
    const map = {};
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
            map[s[i]]++;
        }
    }
    
    for(let i=0;i<s.length;i++){
        if(map[s[i]] === 1){
            return i;
        }
    }
    return -1;
};