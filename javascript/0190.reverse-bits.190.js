/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    let count = 32;
    while(n>0){
        result = result*2 + (n&1);
        n >>>= 1;
        count--;
    }
    
    return count>0?result << count:result;
};