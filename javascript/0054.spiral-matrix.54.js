/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }

    let top = 0;
    let left = 0;
    let right = matrix[0].length;
    let bottom = matrix.length;
    let direction = 0;
    const arr = [];
    while (left < right && top < bottom) {
        if (direction === 0) {
            for (let i = left; i < right; i++) {
                arr.push(matrix[top][i]);
            }
            top++;
        } else if (direction === 1) {
            right--;
            for (let i = top; i < bottom; i++) {
                arr.push(matrix[i][right]);
            }
        } else if (direction === 2) {
            bottom--;
            for (let i = right - 1; i >= left; i--) {
                arr.push(matrix[bottom][i]);
            }
        } else {
            for (let i = bottom - 1; i >= top; i--) {
                arr.push(matrix[i][left]);
            }
            left++;
        }

        direction = (direction + 1) % 4;
    }

    return arr;
};
