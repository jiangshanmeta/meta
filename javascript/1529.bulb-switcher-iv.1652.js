/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
    let result = 0;
    let current = 0;
    for (let i = 0; i < target.length; i++) {
        if ((+target[i]) !== current) {
            result++;
            current ^= 1;
        }
    }
    return result;
};
