/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
    let index = 0;
    let i = 0;
    let j = 0;
    while (index < s.length && i < words.length) {
        if (words[i][j] !== s[index]) {
            return false;
        }
        index++;
        j++;
        if (words[i].length === j) {
            i++;
            j = 0;
        }
    }
    return index === s.length && j === 0;
};
