/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    // 参考leetcode 304
    const m = mat.length;
    const n = mat[0].length;
    const rangeSum = new Array(m+1);
    rangeSum[0] = new Array(n+1).fill(0);
    for(let i=1;i<m+1;i++){
        rangeSum[i] = new Array(n+1);
        rangeSum[i][0] = 0;
        let sum = 0;
        for(let j=1;j<n+1;j++){
            sum += mat[i-1][j-1];
            rangeSum[i][j] = rangeSum[i-1][j]+sum;
        }
    }
    
    const result = new Array(m);
    for(let i=0;i<m;i++){
        result[i] = new Array(n);
        for(let j=0;j<n;j++){
            const x1 = Math.max(0,i-K);
            const y1 = Math.max(0,j-K);
            const x2 = Math.min(m-1,i+K);
            const y2 = Math.min(n-1,j+K);
            result[i][j] = rangeSum[x2+1][y2+1]+rangeSum[x1][y1]-rangeSum[x2+1][y1]-rangeSum[x1][y2+1];
            
        }
    }
    
    return result;
};