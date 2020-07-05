/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result = 0;
    let base = 5;
    while(base<=n){
        result += Math.floor(n/base);
        base *= 5;
    }
    return result;
};