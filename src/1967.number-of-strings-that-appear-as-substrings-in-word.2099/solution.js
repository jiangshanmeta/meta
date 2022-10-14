/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let result = 0;
    for (const pattern of patterns) {
        if (word.includes(pattern)) {
            result++;
        }
    }
    return result;
};
