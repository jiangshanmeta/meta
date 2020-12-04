/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    const str = String(n);
    const helper = [];
    const result = [];
    let index = str.length - 1;
    while (index > -1) {
        while (index > -1 && helper.length < 3) {
            helper.push(str[index--]);
        }
        helper.reverse();
        result.push(helper.join(''));
        helper.length = 0;
    }
    result.reverse();
    return result.join('.');
};
