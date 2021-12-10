/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    let one = 0;
    let zero = 0;
    for (const item of s) {
        if (item === '0') {
            one++;
        } else {
            one = Math.min(one, zero);
            zero++;
        }
    }
    return Math.min(one, zero);
};
