/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
    // 参考leetcode 560
    const modCount = new Array(K).fill(0);
    modCount[0] = 1;
    let sum = 0;
    let result = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        let mod = sum % K;
        if (mod < 0) {
            mod += K;
        }
        result += modCount[mod];
        modCount[mod]++;
    }
    return result;
};
