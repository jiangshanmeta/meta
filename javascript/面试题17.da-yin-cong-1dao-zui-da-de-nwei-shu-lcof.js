/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    const max = 10**n;
    const result = [];
    for(let i=1;i<max;i++){
        result.push(i);
    }
    return result;
};