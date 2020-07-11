/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    // 和max square基本一致
    // 可以把空间压倒O(N) 偷懒了
    const M = matrix.length;
    const N = matrix[0].length;
    let dp = new Array(N).fill(0);
    const column = new Array(N).fill(0);
    let result = 0;
    for(let i=0;i<M;i++){
        let row = 0;
        const nextDp = new Array(N).fill(0);
        for(let j=0;j<N;j++){
            if(matrix[i][j] === 0){
                row = 0;
                column[j] = 0;
                continue;
            }
            row++;
            column[j]++;
            nextDp[j] = Math.min(row,column[j],(j>0?dp[j-1]:0)+1);
            result += nextDp[j];
        }
        dp = nextDp;
    }
    return result;
};