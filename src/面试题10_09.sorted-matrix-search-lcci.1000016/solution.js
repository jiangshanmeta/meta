/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0) {
        return false;
    }
    let row = 0;
    let column = matrix[0].length - 1;
    const ROW = matrix.length;
    while (row < ROW && column > -1) {
        if (matrix[row][column] < target) {
            row++;
        } else if (matrix[row][column] > target) {
            column--;
        } else {
            return true;
        }
    }
    return false;
};
