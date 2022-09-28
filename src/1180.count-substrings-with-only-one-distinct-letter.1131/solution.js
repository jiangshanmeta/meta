/**
 * @param {string} S
 * @return {number}
 */
// Given a string S, return the number of substrings that have only one distinct letter.
var countLetters = function (S) {
    let result = 0;
    let index = 0;
    while (index < S.length) {
        const char = S[index++];
        let count = 1;
        // 数出有几个连续的相同的char
        while (index < S.length && S[index] === char) {
            index++;
            count++;
        }
        // 从1加到count 等差数列求和
        result += count * (1 + count) / 2;
    }
    return result;
};
