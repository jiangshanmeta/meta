/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
// 即求每个op都碰到的区域
// 即x，y的最小值
var maxCount = function (m, n, ops) {
    for (let i = 0; i < ops.length; i++) {
        const x = ops[i][0];
        if (x < m) {
            m = x;
            if (x === 1) {
                break;
            }
        }
    }

    for (let i = 0; i < ops.length; i++) {
        const y = ops[i][1];
        if (y < n) {
            n = y;
            if (y === 1) {
                break;
            }
        }
    }

    return m * n;
};
