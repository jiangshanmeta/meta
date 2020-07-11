/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    const maxStr = A.repeat(Math.ceil(B.length/A.length)*2);
    const index = maxStr.indexOf(B);
    if(index === -1){
        return -1;
    }
    
    return Math.ceil((B.length+index)/A.length);
};