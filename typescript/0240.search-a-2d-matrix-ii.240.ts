function searchMatrix(matrix: number[][], target: number): boolean {
    if(matrix.length === 0){
        return false;
    }
    let row:number = 0;
    let column:number = matrix[0].length-1;
    while(row<matrix.length && column>-1){
        if(matrix[row][column]>target){
            column--;
        }else if(matrix[row][column]<target){
            row++;
        }else{
            return true;
        }
    }
    return false;
};