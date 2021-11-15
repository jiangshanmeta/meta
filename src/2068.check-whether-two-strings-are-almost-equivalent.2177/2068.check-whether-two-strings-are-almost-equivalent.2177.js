/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
    const counts1 = getCounts(word1);
    const counts2 = getCounts(word2);
    for (let i = 0; i < 26; i++) {
        if (Math.abs(counts1[i] - counts2[i]) > 3) {
            return false;
        }
    }
    return true;
};

function getCounts (word) {
    const result = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        result[word.charCodeAt(i) - 97]++;
    }
    return result;
}
