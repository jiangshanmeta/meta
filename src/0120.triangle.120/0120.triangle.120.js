/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            // 找到上一层相邻位置最小的元素
            const prev = [];
            if (j > 0) {
                prev.push(triangle[i - 1][j - 1]);
            }
            if (j !== triangle[i].length - 1) {
                prev.push(triangle[i - 1][j]);
            }
            triangle[i][j] += Math.min(...prev);
        }
    }
    return Math.min(...triangle[triangle.length - 1]);
};
