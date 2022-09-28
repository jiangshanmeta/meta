/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let low = 0;
    let high = x;
    let result = 0;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const pow = mid * mid;
        if (pow > x) {
            high = mid - 1;
        } else {
            result = Math.max(result, mid);
            low = mid + 1;
        }
    }
    return result;
};
