/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    const result = [];
    const map = {};
    for (let i = 9; i < s.length; i++) {
        // 取长度为10的子串
        const sub = s.substring(i - 9, i + 1);
        if (!map[sub]) {
            map[sub] = 1;
        } else {
            map[sub] === 1 && result.push(sub);
            map[sub]++;
        }
    }
    return result;
};
