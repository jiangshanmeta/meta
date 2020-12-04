/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let low = 1;
    let high = num;
    // 二分
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const pingfang = mid * mid;
        if (pingfang === num) {
            return true;
        }
        if (pingfang > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
};
