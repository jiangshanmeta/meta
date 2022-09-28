/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    const OVER = 2147483647;
    let low = 0;
    let high = 20000;
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        const rst = reader.get(mid);
        if (rst === OVER) {
            high = mid - 1;
        } else if (rst > target) {
            high = mid - 1;
        } else if (rst < target) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};
