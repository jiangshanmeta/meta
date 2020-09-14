/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix.length === 0) {
        return 0;
    }
    // dp[j] 表示某一行 以j为结尾的正方形长度
    const dp = new Array(matrix[0].length);
    // topBottom[j]表示 某一行 以j为结尾的 从它向上看有几个连续的1
    const topBottom = new Array(matrix[0].length);
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === '0') {
            dp[i] = 0;
            topBottom[i] = 0;
        } else {
            dp[i] = 1;
            topBottom[i] = 1;
        }
    }
    // leftRight[j]表示 某一行以j为结尾的有几个连续的1
    const leftRight = new Array(matrix[0].length);
    let result = Math.max(...dp);
    for (let i = 1; i < matrix.length; i++) {
        leftRight[0] = matrix[i][0] === '0' ? 0 : 1;
        topBottom[0] = matrix[i][0] === '0' ? 0 : 1;

        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === '0') {
                leftRight[j] = 0;
                topBottom[j] = 0;
            } else {
                leftRight[j] = leftRight[j - 1] + 1;
                topBottom[j]++;
            }
        }
        // 状态转移方程 其实应该有多个数组的 为了省内存就一个数组了
        // 同时用了一个数组 所以要从右到左 最后是dp[0]
        for (let j = matrix[0].length - 1; j > 0; j--) {
            dp[j] = Math.min(leftRight[j], topBottom[j], dp[j - 1] + 1);
        }
        dp[0] = matrix[i][0] === '0' ? 0 : 1;

        result = Math.max(result, Math.max(...dp));
    }

    return result ** 2;
};
