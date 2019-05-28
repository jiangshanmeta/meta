/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let count = 0;
    for(let i=0;i<A[0].length;i++){
        for(let j=0;j<A.length-1;j++){
            // 看第i列是否非递减
            if(A[j][i]>A[j+1][i]){
                count++;
                break;
            }
        }
    }
    return count;
};