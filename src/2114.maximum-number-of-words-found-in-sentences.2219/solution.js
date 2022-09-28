/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    return Math.max(...sentences.map(calc));
};

function calc (sentence) {
    let result = 1;
    for (const item of sentence) {
        if (item === ' ') {
            result++;
        }
    }
    return result;
}
