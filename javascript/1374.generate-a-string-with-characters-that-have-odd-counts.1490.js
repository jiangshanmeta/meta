/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n&1){
        return 'a'.repeat(n);
    }else{
        return 'a'.repeat(n-1)+'b'.repeat(1);
    }
};