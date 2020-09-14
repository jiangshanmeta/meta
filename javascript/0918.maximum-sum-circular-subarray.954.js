/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
    // rightMax[i] 从i到末尾的所有 到结尾的子序列的和的最大值
    const rightMax = new Array(A.length);
    rightMax[rightMax.length - 1] = A[A.length - 1];
    let suffix = A[A.length - 1];
    for (let i = A.length - 2; i > 0; i--) {
        suffix += A[i];
        rightMax[i] = Math.max(rightMax[i + 1], suffix);
    }
    rightMax.push(0);
    let result = -Infinity;
    let sum = 0;
    let prefix = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        if (prefix < 0) {
            prefix = A[i];
        } else {
            prefix += A[i];
        }
        result = Math.max(
            result,
            prefix,
            // 处理环绕的
            sum + rightMax[i + 1]
        );
    }
    return result;
};
