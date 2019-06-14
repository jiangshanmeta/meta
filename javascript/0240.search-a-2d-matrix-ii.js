/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0){
        return false;
    }
    let x = matrix.length-1;
    let maxColumn = matrix[0].length;
    let y = 0;
    
    while(x>-1 && y<maxColumn){
        const val = matrix[x][y];
        if(val<target){
            y++;
        }else if(val>target){
            x--;
        }else{
            return true;
        }
    }
    return false;
};