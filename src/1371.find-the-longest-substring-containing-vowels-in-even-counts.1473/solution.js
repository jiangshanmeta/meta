/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
    let result = 0;
    const bitStartIndex = new Array(32).fill(s.length);
    bitStartIndex[0] = -1;
    // bitmask 五位表示aeiou是否是奇数
    let bitmask = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            bitmask ^= 16;
        } else if (s[i] === 'e') {
            bitmask ^= 8;
        } else if (s[i] === 'i') {
            bitmask ^= 4;
        } else if (s[i] === 'o') {
            bitmask ^= 2;
        } else if (s[i] === 'u') {
            bitmask ^= 1;
        }
        if (bitStartIndex[bitmask] === s.length) {
            bitStartIndex[bitmask] = i;
        } else {
            // 相同的bitmask 中间的元音一定是偶数
            result = Math.max(result, i - bitStartIndex[bitmask]);
        }
    }
    return result;
};
