/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const M = matrix.length;
    const N = matrix[0].length;
    const isRowMin = new Array(M);
    const isColumnMax = new Array(M);
    for(let i=0;i<M;i++){
        isRowMin[i] = new Array(N).fill(false);
        isColumnMax[i] = new Array(N).fill(false);
        const rowMin = Math.min(...matrix[i]);
        for(let j=0;j<N;j++){
            if(matrix[i][j] === rowMin){
                isRowMin[i][j] = true;
            }
        }
    }
    for(let j=0;j<N;j++){
        let columnMax = 0;
        for(let i=0;i<M;i++){
            columnMax = Math.max(columnMax,matrix[i][j]);
        }
        for(let i=0;i<M;i++){
            if(matrix[i][j] === columnMax){
                isColumnMax[i][j] = true; 
            }
        }
    }
    const result = [];
    for(let i=0;i<M;i++){
        for(let j=0;j<N;j++){
            if(isRowMin[i][j] && isColumnMax[i][j]){
                result.push(matrix[i][j])
            }
        }
    }
    
    return result;
};