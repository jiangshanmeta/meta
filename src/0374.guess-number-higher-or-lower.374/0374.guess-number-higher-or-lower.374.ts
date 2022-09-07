/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return                 -1 if num is lower than the guess number
 *                         1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

declare function guess(n:number):number;

function guessNumber (n: number): number {
    let low = 1;
    while (low <= n) {
        const mid = low + ((n - low) >>> 1);
        const rst = guess(mid);
        if (rst === 1) {
            low = mid + 1;
        } else if (rst === -1) {
            n = mid - 1;
        } else {
            return mid;
        }
    }
    return low;
}
