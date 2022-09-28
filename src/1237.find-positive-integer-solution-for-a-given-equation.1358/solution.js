/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
// 二分
var findSolution = function (customfunction, z) {
    const result = [];
    for (let i = 1; i < 1001; i++) {
        let low = 1;
        let high = 1001;
        while (low <= high) {
            const mid = (low + high) >> 1;
            const v = customfunction.f(i, mid);
            if (v > z) {
                high = mid - 1;
            } else if (v < z) {
                low = mid + 1;
            } else {
                result.push([
                    i, mid, ]);
                break;
            }
        }
    }
    return result;
};
