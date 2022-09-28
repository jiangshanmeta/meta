/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    const set = new Set();
    let index = 0;
    while (index < word.length) {
        if (!isDigit(word.charCodeAt(index))) {
            index++;
            continue;
        }
        const start = index++;
        while (index < word.length && isDigit(word.charCodeAt(index))) {
            index++;
        }
        set.add(+word.slice(start, index));
    }
    return set.size;
};

function isDigit (code) {
    return code > 47 && code < 58;
}
