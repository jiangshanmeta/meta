/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    const list = text.split(' ');
    const result = [];
    for (let i = 0; i < list.length - 2; i++) {
        if (list[i] === first && list[i + 1] === second) {
            result.push(list[i + 2]);
        }
    }
    return result;
};
