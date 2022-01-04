/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }
    const s1counts = new Array(26).fill(0);
    for (const char of s1) {
        s1counts[char.charCodeAt(0) - 97]++;
    }
    const s2counts = new Array(26).fill(0);
    for (let i = 0; i < s1.length - 1; i++) {
        s2counts[s2.charCodeAt(i) - 97]++;
    }
    for (let i = s1.length - 1; i < s2.length; i++) {
        s2counts[s2.charCodeAt(i) - 97]++;
        if (same(s1counts, s2counts)) {
            return true;
        }
        s2counts[s2.charCodeAt(i - s1.length + 1) - 97]--;
    }
    return false;
};

function same (l1, l2) {
    return l1.every((item, index) => item === l2[index]);
}
