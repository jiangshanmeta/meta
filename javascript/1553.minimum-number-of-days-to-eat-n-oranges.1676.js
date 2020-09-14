/**
 * @param {number} n
 * @return {number}
 */
const cache = Object.create(null);
cache[0] = 0;
var minDays = function (n) {
    if (n in cache) {
        return cache[n];
    }
    cache[n] = Math.min(
        1 + n % 2 + minDays((n - n % 2) / 2),
        1 + n % 3 + minDays((n - n % 3) / 3),
        n
    );
    return cache[n];
};
