/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
    // 0x55555555 是 0101重复八遍 用来取出偶数位
    // 0xaaaaaaaa 是 1010重复八遍 用来取出奇数位
    return ((num & 0x55555555) << 1) | ((num & 0xaaaaaaaa) >> 1);
};
