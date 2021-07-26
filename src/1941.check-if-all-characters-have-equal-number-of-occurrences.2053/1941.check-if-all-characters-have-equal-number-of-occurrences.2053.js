/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }

    const frequency = counts.find(item => item !== 0);
    for (let i = 1; i < 26; i++) {
        if (counts[i] === 0) {
            continue;
        }
        if (counts[i] !== frequency) {
            return false;
        }
    }
    return true;
};
