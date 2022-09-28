/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let i1 = 0;
    let j1 = 0;
    let i2 = 0;
    let j2 = 0;
    while (i1 < word1.length && i2 < word2.length) {
        if (word1[i1][j1++] !== word2[i2][j2++]) {
            return false;
        }
        if (j1 === word1[i1].length) {
            i1++;
            j1 = 0;
        }
        if (j2 === word2[i2].length) {
            i2++;
            j2 = 0;
        }
    }
    return i1 === word1.length && i2 === word2.length;
};
