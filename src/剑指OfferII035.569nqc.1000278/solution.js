/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const tss = timePoints.map((time) => {
        return (+time.slice(0, 2)) * 60 + (+time.slice(3));
    }).sort((a, b) => a - b);
    let result = tss[0] + 60 * 24 - tss[tss.length - 1];
    for (let i = 1; i < tss.length; i++) {
        result = Math.min(result, tss[i] - tss[i - 1]);
    }
    return result;
};
