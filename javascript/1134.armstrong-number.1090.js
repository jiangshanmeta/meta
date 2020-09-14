/**
 * @param {number} N
 * @return {boolean}
 */
// 按照题目
var isArmstrong = function (N) {
    const k = ('' + N).length;
    let sum = 0;
    let copyN = N;
    while (copyN > 0) {
        const digit = copyN % 10;
        sum += digit ** k;
        if (sum > N) {
            return false;
        }
        copyN = (copyN - digit) / 10;
    }
    return sum === N;
};
