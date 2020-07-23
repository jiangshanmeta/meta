/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function(A) {
    for(let i=0;i<A.length;i++){
        if(A[i] !== i){
            if(A[i] !== i+1  || A[i+1] !== i){
                return false;
            }
            i++;
        }
    }
    return true;
};