/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function (K) {
    if (K % 2 === 0 || K % 5 === 0) {
        return -1;
    }

    const set = new Set();
    let rest = 0;
    let result = 0;
    while (!set.has(rest)) {
        set.add(rest);
        rest = (rest * 10 + 1) % K;
        result++;
        if (rest === 0) {
            return result;
        }
    }
    return -1;
};
