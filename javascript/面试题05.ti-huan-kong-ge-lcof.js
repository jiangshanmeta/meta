/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    const result = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === ' '){
            result.push('%20');
        }else{
            result.push(s[i])
        }
    }
    return result.join('');
};