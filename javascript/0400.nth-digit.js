/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let digit = 1;
    let a = 9;
    // 先确定最终数字有几位
    // 1位 用掉9个数字
    // 2位在1的基础上用掉 90*2个数字
    // 3为在1的基础上用掉 900*3个数字
    while(n-a*digit>0){
        n -= a*digit;
        a *= 10;
        digit++;
    }
    a /= 9;
    n--;
    // 确定是第几个数字，第几位
    return (a+(n/digit | 0)).toString()[n%digit];
};