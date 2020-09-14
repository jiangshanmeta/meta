/**
 * @param {number} num
 * @return {string}
 */
// 10进制转7进制 除k取余法
var convertToBase7 = function (num) {
    if (num === 0) {
        return '0';
    }
    const prefix = num > 0 ? '' : '-';
    num = Math.abs(num);
    let str = '';
    while (num > 0) {
        str = `${num % 7}${str}`;
        num = num / 7 | 0;
    }
    return prefix + str;
};
