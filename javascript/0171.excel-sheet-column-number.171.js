/**
 * @param {string} s
 * @return {number}
 */
// 本质是26进制转换为10进制
var titleToNumber = function (s) {
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        num = num * 26 + (s.charCodeAt(i) - 65 + 1);
    }

    return num;
};
