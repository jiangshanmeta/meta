/**
 * @param {number} n
 * @return {string}
 */
// 本质是转换为26进制
var convertToTitle = function (n) {
    let str = '';
    while (n > 0) {
        str = String.fromCharCode((n - 1) % 26 + 65) + str;
        n = Math.floor((n - 1) / 26);
    }

    return str;
};
