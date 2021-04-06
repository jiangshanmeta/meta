/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
    let result = 0;
    const mod = 10 ** 9 + 7;
    let index = 0;
    while (index < s.length) {
        const c = s[index++];
        let count = 1;
        while (index < s.length && s[index] === c) {
            index++;
            count++;
        }
        result = (result + (1 + count) * count / 2) % mod;
    }
    return result;
};
