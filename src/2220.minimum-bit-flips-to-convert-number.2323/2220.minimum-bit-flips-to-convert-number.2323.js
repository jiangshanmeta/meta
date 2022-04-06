/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let num = start ^ goal;
    let result = 0;
    while (num) {
        num &= (num - 1);
        result++;
    }
    return result;
};
