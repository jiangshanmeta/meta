/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    // 解析时间并排序
    const ts = timePoints.map((str) => {
        return str.slice(0, 2) * 60 + +str.slice(3);
    }).sort((a, b) => a - b);

    // 跨越的，考虑两端的值，这是跨越情况加时间差最小的情况
    let min = ts[ts.length - 1] - ts[0];
    if (min > 720) {
        min = 1440 - min;
    }

    for (let i = 1; i < ts.length; i++) {
        if (ts[i] - ts[i - 1] < min) {
            min = ts[i] - ts[i - 1];
        }
    }
    return min;
};
