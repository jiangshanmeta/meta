/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    let result = n;
    n>0 && (result += sumNums(n-1));
    return result;
};