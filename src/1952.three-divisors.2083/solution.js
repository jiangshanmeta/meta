/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    if (n < 4) {
        return false;
    }
    // 当且仅当除了1和n本身 只有根号n一个除数
    // 时间复杂度 O(N^(1/2))
    const root = Math.sqrt(n);
    if (!Number.isInteger(root)) {
        return false;
    }
    for (let i = 2; i < root; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
