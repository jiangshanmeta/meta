/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
    const mod = 10 ** 9 + 7;
    let result = 0;
    let index = 0;
    while (index < s.length) {
        if (s[index] === '0') {
            index++;
            continue;
        }
        let count = 0;
        while (index < s.length && s[index] === '1') {
            index++;
            count++;
        }
        result = (result + count * (count + 1) / 2) % mod;
    }
    return result;
};
