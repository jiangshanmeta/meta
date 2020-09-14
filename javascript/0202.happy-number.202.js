/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n === 1) {
        return true;
    }
    function helper (n, hash) {
        let sum = 0;
        while (n > 0) {
            sum += (n % 10) ** 2;
            n = n / 10 | 0;
        }
        if (sum === 1) {
            return true;
        }

        if (hash[sum]) {
            return false;
        }
        hash[sum] = true;
        return helper(sum, hash);
    }

    return helper(n, {
        [n]: true,
    });
};
