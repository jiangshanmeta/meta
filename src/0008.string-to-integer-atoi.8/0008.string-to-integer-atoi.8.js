/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var num = parseInt(str);
    // 解析失败
    // eslint-disable-next-line no-self-compare
    if (num !== num) {
        return 0;
    }

    if (num > 2147483647) {
        return 2147483647;
    }
    if (num < -2147483648) {
        return -2147483648;
    }
    return num;
};
