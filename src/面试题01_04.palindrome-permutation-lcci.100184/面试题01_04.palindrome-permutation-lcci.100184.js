/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
    const map = Object.create(null);
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in map)) {
            map[s[i]] = 0;
        }
        map[s[i]]++;
    }
    let flag = false;
    const counts = Object.values(map);
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] % 2 === 0) {
            continue;
        }
        if (flag) {
            return false;
        }
        flag = true;
    }
    return true;
};
