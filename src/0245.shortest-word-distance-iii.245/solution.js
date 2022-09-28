/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function (wordsDict, word1, word2) {
    if (word1 === word2) {
        let result = Infinity;
        let prevIndex = -1;
        for (let i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i] !== word1) {
                continue;
            }
            if (prevIndex !== -1) {
                result = Math.min(result, i - prevIndex);
            }
            prevIndex = i;
        }
        return result;
    } else {
        let prevIndex1 = -1;
        let prevIndex2 = -1;
        let result = Infinity;
        for (let i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i] === word1) {
                if (prevIndex2 !== -1) {
                    result = Math.min(result, i - prevIndex2);
                }
                prevIndex1 = i;
            } else if (wordsDict[i] === word2) {
                if (prevIndex1 !== -1) {
                    result = Math.min(result, i - prevIndex1);
                }
                prevIndex2 = i;
            }
        }
        return result;
    }
};
