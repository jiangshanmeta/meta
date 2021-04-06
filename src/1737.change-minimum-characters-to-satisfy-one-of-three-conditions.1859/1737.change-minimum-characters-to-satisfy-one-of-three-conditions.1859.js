/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function (a, b) {
    const countA = new Array(26).fill(0);
    const countB = new Array(26).fill(0);
    for (let i = 0; i < a.length; i++) {
        countA[a.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < b.length; i++) {
        countB[b.charCodeAt(i) - 97]++;
    }
    let result = a.length + b.length;
    for (let i = 0; i < 26; i++) {
        result = Math.min(result, a.length + b.length - countA[i] - countB[i]);
    }
    const prefixSumA = new Array(26);
    const prefixSumB = new Array(26);
    prefixSumA[0] = 0;
    prefixSumB[0] = 0;
    for (let i = 1; i < 26; i++) {
        prefixSumA[i] = prefixSumA[i - 1] + countA[i - 1];
        prefixSumB[i] = prefixSumB[i - 1] + countB[i - 1];
    }
    const suffixSumA = new Array(26);
    const suffixSumB = new Array(26);
    suffixSumA[25] = 0;
    suffixSumB[25] = 0;
    for (let i = 24; i > -1; i--) {
        suffixSumA[i] = suffixSumA[i + 1] + countA[i + 1];
        suffixSumB[i] = suffixSumB[i + 1] + countB[i + 1];
    }
    for (let i = 0; i < 25; i++) {
        result = Math.min(result, suffixSumA[i] + prefixSumB[i + 1], suffixSumB[i] + prefixSumA[i + 1]);
    }

    return result;
};
