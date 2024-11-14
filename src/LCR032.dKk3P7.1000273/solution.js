/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let hasDiff = false;
    const countS = new Array(26).fill(0);
    const countT = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        countS[s.charCodeAt(i) - 97]++;
        countT[t.charCodeAt(i) - 97]++;
        if (s[i] !== t[i]) {
            hasDiff = true;
        }
    }
    if (!hasDiff) {
        return false;
    }
    for (let i = 0; i < 26; i++) {
        if (countS[i] !== countT[i]) {
            return false;
        }
    }

    return true;
};
