/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const arr = str.split(" ");
    if(pattern.length !== arr.length){
        return false;
    }
    const pattern2str = {};
    const str2pattern = {};
    for(let i=0;i<pattern.length;i++){
       if(pattern2str[pattern[i]] === undefined){
           if(str2pattern[arr[i]] !== undefined){
               return false;
           }
           pattern2str[pattern[i]] = arr[i];
           str2pattern[arr[i]] = pattern[i];
           
       }else if(pattern2str[pattern[i]] !== arr[i]){
           return false;
       }
    }
    return true;
};