/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let result = 0;
    let index = 0;
    while(index<s.length){
        const char = s[index++];
        let count = 1;
        while(index<s.length && s[index] === char){
            index++;
            count++;
        }
        result = Math.max(result,count);
    }
    return result;
};