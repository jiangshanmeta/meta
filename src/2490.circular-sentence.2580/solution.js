/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    let index = 0;
    while (index < sentence.length) {
        if (sentence[index] !== ' ') {
            index++;
            continue;
        }
        if (sentence[index - 1] !== sentence[index + 1]) {
            return false;
        }
        index++;
    }
    return sentence[0] === sentence[sentence.length - 1];
};
