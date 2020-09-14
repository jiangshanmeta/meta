/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (str) {
    const sequence = [];
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (word.length) {
                sequence.unshift(word);
                word = '';
            }
        } else {
            word += str[i];
        }
    }
    word && sequence.unshift(word);

    return sequence.join(' ');
};
