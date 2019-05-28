/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// 矩阵的转置
var transpose = function(A) {
    const arrs = Array.apply(null,{length:A[0].length}).map(()=>new Array(A.length));
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A[0].length;j++){
            arrs[j][i] = A[i][j];
        }
    }
    return arrs;
};