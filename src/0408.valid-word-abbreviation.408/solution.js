/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
    const list = [];
    let index = 0;
    let length = 0;
    while (index < abbr.length) {
        if (isDigitWithout0(abbr[index])) {
            const start = index++;
            while (index < abbr.length && isDigit(abbr[index])) {
                index++;
            }
            const count = +abbr.slice(start, index);
            length += count;
            list.push(count);
        } else {
            length++;
            list.push(abbr[index++]);
        }
    }
    if (length !== word.length) {
        return false;
    }

    index = 0;
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === 'number') {
            index += list[i];
        } else {
            if (word[index] !== list[i]) {
                return false;
            }
            index++;
        }
    }

    return true;
};

function isDigitWithout0 (letter) {
    const code = letter.charCodeAt(0);
    return code > 48 && code < 58;
}

function isDigit (letter) {
    const code = letter.charCodeAt(0);
    return code > 47 && code < 58;
}
