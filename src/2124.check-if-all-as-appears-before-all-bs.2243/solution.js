/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    let hasB = false;
    for (const c of s) {
        if (c === 'b') {
            hasB = true;
        } else if (hasB) {
            return false;
        }
    }
    return true;
};
