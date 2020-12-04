/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    let count = 0;
    for (let i = 1; i < N + 1; i++) {
        const str = i + '';
        // 无法构成合法数字
        if (str.includes('3') || str.includes('4') || str.includes('7')) {
            continue;
        }
        // 可以构成不同数字
        if (str.includes('2') || str.includes('5') || str.includes('6') || str.includes('9')) {
            count++;
        }
    }
    return count;
};
