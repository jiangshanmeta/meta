/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0){
        return false;
    }
    const column = matrix[0].length;
    let low = 0;
    let high = column*matrix.length-1;
    
    while(low<high){
        const mid = ( (low+high)/2 ) | 0;
        const val = matrix[(mid/column) | 0][mid%column];
        if(val<target){
            low = mid+1;
        }else if(val>target){
            high = mid-1;
        }else{
            return true;
        }


    }

    if(low === high){
        return matrix[(low/column) | 0][low%column] === target;
    }
    return false;
};