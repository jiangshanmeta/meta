/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    let result = '';
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            result = number.slice(0, i) + number.slice(i + 1);
            if (i + 1 < number.length && number[i] < number[i + 1]) {
                break;
            }
        }
    }
    return result;
};
