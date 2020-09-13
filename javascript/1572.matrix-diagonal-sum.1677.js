/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let result = 0;
    const M = mat.length;
    for(let i=0;i<M;i++){
        result += mat[i][i];
        if(i !== M-i-1){
            result += mat[i][M-i-1];
        }
    }
    return result;
};