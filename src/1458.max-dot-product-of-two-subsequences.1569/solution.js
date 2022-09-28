/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 二维dp
// dp[i][j] num2[0...i] nums1[0...j] 这个范围内最大的点乘积
// 实现上压缩了空间
var maxDotProduct = function (nums1, nums2) {
    let dp = new Array(nums1.length);
    dp[0] = nums1[0] * nums2[0];
    for (let i = 1; i < nums1.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums1[i] * nums2[0]);
    }
    let result = Math.max(...dp);
    for (let i = 1; i < nums2.length; i++) {
        const newDp = new Array(nums1.length);
        newDp[0] = Math.max(nums1[0] * nums2[i], dp[0]);
        for (let j = 1; j < nums1.length; j++) {
            newDp[j] = Math.max(
                Math.max(dp[j - 1], 0) + nums1[j] * nums2[i],
                dp[j],
                newDp[j - 1]
            );
        }
        result = Math.max(result, ...newDp);
        dp = newDp;
    }
    return result;
};
