/**
 * @param {number[]} A
 * @return {number}
 */
var numFactoredBinaryTrees = function (A) {
    // 从小到大排列
    A.sort((a, b) => a - b);
    const indexMap = A.reduce((obj, item, index) => {
        obj[item] = index;
        return obj;
    }, {});

    const dp = new Array(A.length).fill(1);
    const mod = 10 ** 9 + 7;
    for (let i = 1; i < A.length; i++) {
        // 看前面的元素能否构成A[i]
        for (let j = 0; j < i; j++) {
            // 必须能整除
            if (A[i] % A[j] !== 0) {
                continue;
            }
            const rest = A[i] / A[j];
            // A[j]<=A[i]/A[j] 排除一部分运算
            if (rest < A[j]) {
                break;
            }
            const anotherIndex = indexMap[rest];
            if (anotherIndex === undefined) {
                continue;
            }
            if (rest === A[j]) {
                // A[j] 恰好是 sqrt(A[i]) 左右两子树互换没意义
                dp[i] += dp[j] * dp[j];
            } else {
                // 系数2是考虑到了左右两子树可以互换
                dp[i] += 2 * dp[j] * dp[anotherIndex];
            }
        }
        dp[i] = dp[i] % mod;
    }

    return dp.reduce((sum, item) => {
        return sum + item;
    }, 0) % mod;
};
