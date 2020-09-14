/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let result = 0;
    const map = Object.create(null);
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            index = Math.max(index, map[s[i]] + 1);
        }
        result = Math.max(result, i - index + 1);
        map[s[i]] = i;
    }
    console.log(map);
    return result;
};
