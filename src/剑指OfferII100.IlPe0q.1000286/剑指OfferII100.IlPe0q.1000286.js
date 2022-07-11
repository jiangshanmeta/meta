/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (let i = 1; i < triangle.length; i++) {
        triangle[i][0] += triangle[i - 1][0];
        for (let j = 1; j < i; j++) {
            triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
        }
        triangle[i][i] += triangle[i - 1][i - 1];
    }
    return Math.min(...triangle[triangle.length - 1]);
};
