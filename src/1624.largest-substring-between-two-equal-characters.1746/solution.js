/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let result = -1;
    const indexs = new Array(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        if (indexs[code] === -1) {
            indexs[code] = i;
        } else {
            result = Math.max(result, i - indexs[code] - 1);
        }
    }
    return result;
};
