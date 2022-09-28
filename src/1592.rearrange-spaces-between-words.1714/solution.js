/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let count = 0;
    const words = [];
    let index = 0;
    while (index < text.length) {
        while (index < text.length && text[index] === ' ') {
            index++;
            count++;
        }
        const word = [];
        while (index < text.length && text[index] !== ' ') {
            word.push(text[index++]);
        }
        word.length && words.push(word.join(''));
    }
    if (words.length === 1) {
        return words[0] + ' '.repeat(count);
    }
    const rest = count % (words.length - 1);
    const per = (count - rest) / (words.length - 1);
    return words.join(' '.repeat(per)) + ' '.repeat(rest);
};
