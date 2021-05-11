/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
    const result = ['0.', ];
    let restSize = 30;
    while (num) {
        if (restSize === 0) {
            return 'ERROR';
        }
        num *= 2;
        if (num >= 1) {
            result.push('1');
            num -= 1;
        } else {
            result.push('0');
        }
        restSize--;
    }
    return result.join('');
};
