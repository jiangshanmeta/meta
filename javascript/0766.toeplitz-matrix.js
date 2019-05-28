/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    // 右上方区域的对角线们
    for(let i=0;i<matrix[0].length;i++){
        for(let j=1;j<matrix.length && i+j<matrix[0].length;j++){
            if(matrix[0][i] !== matrix[j][i+j]){
                return false;
            }
        }
    }
    // 左下方区域的对角线们 
    for(let i=1;i<matrix.length;i++){
        for(let j=i+1;j<matrix.length && j-i<matrix[0].length;j++){
            if(matrix[i][0] !== matrix[j][j-i]){
                return false;
            }
        }
    }

    return true;
};