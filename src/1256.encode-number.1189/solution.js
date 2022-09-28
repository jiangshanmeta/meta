/**
 * @param {number} num
 * @return {string}
 */
var encode = function (num) {
    // 其实就是转换为二进制
    return ((num + 1) >>> 0).toString(2).substring(1);
};
