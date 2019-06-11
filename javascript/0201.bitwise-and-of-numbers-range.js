/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    if(m===0 || 2*m<n){
        return 0;
    }
    
    let i=0;
    while(m !== n){
        m >>= 1;
        n >>= 1;
        i++
    }
    
    return m << i;
};