/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if(matrix.length === 0){
        return []
    }
    const row = matrix.length-1;
    const column = matrix[0].length-1;

    const arr = [];
    for(let i=0;i<row+column+1;i++){
        if(i%2 === 0){
            const min = i>column?i-column-1:-1;
            for(let x=Math.min(i,row);x>min;x--){
                arr.push(matrix[x][i-x]);
            }
            
        }else{
            const max = Math.min(i,row)+1
            for(let x=i>column?i-column:0;x<max;x++){
                arr.push(matrix[x][i-x]);
            }
        }
    }
    
    return arr;
};