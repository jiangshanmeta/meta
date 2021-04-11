/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
    let word1Index = -1;
    let word2Index = -1;
    let result = wordsDict.length;
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            if (word2Index !== -1) {
                result = Math.min(result, i - word2Index);
            }
            word1Index = i;
        } else if (wordsDict[i] === word2) {
            if (word1Index !== -1) {
                result = Math.min(result, i - word1Index);
            }
            word2Index = i;
        }
    }
    return result;
};
