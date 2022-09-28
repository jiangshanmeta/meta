/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    const sequence = sentence.split(' ');
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
};
