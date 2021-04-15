/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    let oddFlag = false;
    const counts = Object.values(map);
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] & 1) {
            if (oddFlag) {
                return false;
            }
            oddFlag = true;
        }
    }
    return true;
};
