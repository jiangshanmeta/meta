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
    while (row < matrix.length && column > -1) {
        const element = matrix[row][column];
        if (element > target) {
            column--;
        } else if (element < target) {
            row++;
        } else {
            return true;
        }
    }
    return false;
};
