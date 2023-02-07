/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let result = 0;
    let sign = 1;
    const str = n.toString();
    for (let i = 0; i < str.length; i++) {
        result += sign * (+str[i]);
        sign = -sign;
    }
    return result;
};
