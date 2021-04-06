/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    const candidates = [];
    let base = 1;
    while (base <= n) {
        candidates.push(base);
        base *= 3;
    }
    let index = candidates.length - 1;
    while (index > -1) {
        if (candidates[index] > n) {
            index--;
            continue;
        }
        n -= candidates[index--];
    }
    return n === 0;
};
