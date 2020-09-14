/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    // 作弊实现
    return !isNaN(parseFloat(s)) && !isNaN(Number(s));
};
