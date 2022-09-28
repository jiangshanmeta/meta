function searchMatrix (matrix: number[][], target: number): boolean {
    const M = matrix.length;
    if (M === 0) {
        return false;
    }
    const N = matrix[0].length;
    if (N === 0) {
        return false;
    }
    let row = 0;
    let column = N - 1;
    while (row < M && column > -1) {
        if (matrix[row][column] < target) {
            row++;
        } else if (matrix[row][column] > target) {
            column--;
        } else {
            return true;
        }
    }
    return false;
}
