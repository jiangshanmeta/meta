/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    const result = [];
    // 奇数的多加个0就好了
    if (n & 1) {
        result.push(0);
        n--;
    }
    // 剩下的就是正负对应着来
    n /= 2;
    for (let i = 1; i <= n; i++) {
        result.push(i);
        result.push(-i);
    }
    return result;
};
