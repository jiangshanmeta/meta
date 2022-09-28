/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (p.length > s.length) {
        return [];
    }
    const pCounts = new Array(26).fill(0);
    for (const char of p) {
        pCounts[char.charCodeAt(0) - 97]++;
    }
    const sCounts = new Array(26).fill(0);
    for (let i = 0; i < p.length - 1; i++) {
        sCounts[s.charCodeAt(i) - 97]++;
    }
    const result = [];
    for (let i = p.length - 1; i < s.length; i++) {
        sCounts[s.charCodeAt(i) - 97]++;
        if (same(pCounts, sCounts)) {
            result.push(i - p.length + 1);
        }
        sCounts[s.charCodeAt(i - p.length + 1) - 97]--;
    }
    return result;
};

function same (l1, l2) {
    return l1.every((item, index) => item === l2[index]);
}
