/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let lastBit = n & 1;
    n >>>= 1;
    
    while(n>0){
        const curBit = n & 1;
        if(curBit === lastBit){
            return false;
        }
        lastBit = curBit;
        n >>>= 1;
    }
    return true;
};