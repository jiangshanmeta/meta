/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let result = 0;
    const set = new Set(allowed);
    for (const word of words) {
        if (word.split('').every(letter => set.has(letter))) {
            result++;
        }
    }
    return result;
};
