/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    let result = 1;
    let chars = 0;
    for (const c of s) {
        const code = 1 << (c.charCodeAt(0) - 97);
        if (chars & code) {
            result++;
            chars = 0;
        }
        chars ^= code;
    }
    return result;
};
