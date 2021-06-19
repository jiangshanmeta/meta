/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    return word2Num(firstWord) + word2Num(secondWord) === word2Num(targetWord);
};

function word2Num (word) {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        result = result * 10 + word.charCodeAt(i) - 97;
    }
    return result;
}
