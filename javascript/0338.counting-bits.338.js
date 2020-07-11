/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const results = new Array(num+1);
    results[0] = 0;
    for(let i=1;i<num+1;i++){
        // 对于数值i 其二进制表示中1的数量 = 右移一位数值中1的数量+最后一位是否是1
        results[i] = results[i >> 1] + (i&1);
    }
    return results;
};