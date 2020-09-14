/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    if (n < 1) {
        return 0;
    }
    if (n < 10) {
        return 1;
    }
    // digit 总共几位数字
    const digit = Math.floor(Math.log10(n));
    const base = Math.pow(10, digit);
    // 最高位数字
    const first = Math.floor(n / base);
    // NumberOf1Between1AndN_Solution(n-base*first) 清空最高位剩下的单独计数
    // Math.min(n,base*2-1)-base+1 最高位能提供的1
    // first*digit*Math.pow(10,digit-1) 从 n-base*first+1 到n非最高位能提供的1
    return countDigitOne(n - first * base) + Math.min(n, base * 2 - 1) - base + 1 + first * digit * Math.pow(10, digit - 1);
};
