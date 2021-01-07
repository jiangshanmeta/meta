/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return            -1 if num is lower than the guess number
 *             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let low = 1;
    let high = n;
    let result = 1;
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        const g = guess(mid);
        if (g === 0) {
            result = mid;
            break;
        } else if (g === 1) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
};
