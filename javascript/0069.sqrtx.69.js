/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let result = 0;
    let low = 0;
    let high = x;
    while (low <= high) {
        const mid = (low + high) >>> 1;
        const square = mid * mid;
        if (square > x) {
            high = mid - 1;
        } else if (square < x) {
            result = Math.max(result, mid);
            low = mid + 1;
        } else {
            result = mid;
            break;
        }
    }
    return result;
};
