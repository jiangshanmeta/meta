/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let counter = 0;
    while(n>0){
        counter += (n&1)
        n = n>>>1;
    }
    return counter;
};