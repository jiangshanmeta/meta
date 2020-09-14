/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length;
    const half = (n / 2) | 0;

    for (let i = 0; i < half; i++) {
        for (let j = i; j < n - i - 1; j++) {
            let curX = i;
            let curY = j;
            let nextX = curY;
            let nextY = n - curX - 1;

            let prev = matrix[nextX][nextY];
            matrix[nextX][nextY] = matrix[curX][curY];
            curX = nextX;
            curY = nextY;

            nextX = curY;
            nextY = n - curX - 1;
            let tmp = matrix[nextX][nextY];

            matrix[nextX][nextY] = prev;
            prev = tmp;
            curX = nextX;
            curY = nextY;

            nextX = curY;
            nextY = n - curX - 1;
            tmp = matrix[nextX][nextY];
            matrix[nextX][nextY] = prev;

            matrix[i][j] = tmp;
        }
    }
};
