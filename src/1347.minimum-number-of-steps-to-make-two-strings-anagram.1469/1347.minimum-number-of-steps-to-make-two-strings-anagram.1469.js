/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const sCharCounts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        sCharCounts[s.charCodeAt(i) - 97]++;
    }
    const tCharCounts = new Array(26).fill(0);
    for (let i = 0; i < t.length; i++) {
        tCharCounts[t.charCodeAt(i) - 97]++;
    }
    let result = 0;
    for (let i = 0; i < 26; i++) {
        if (tCharCounts[i] > sCharCounts[i]) {
            result += tCharCounts[i] - sCharCounts[i];
        }
    }
    return result;
};
