/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0) {
        return false;
    }
    let x = 0;
    let y = matrix[0].length - 1;
    while (x < matrix.length && y > -1) {
        if (matrix[x][y] === target) {
            return true;
        } else if (matrix[x][y] < target) {
            x++;
        } else {
            y--;
        }
    }
    return false;
};
