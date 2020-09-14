/**
 * @param {number} n
 * @return {number}
 */
// http://www.cnblogs.com/grandyang/p/4299608.html
// 这是个以树为背景的动态规划的题目
// F(i) 表示 i个节点能构成的的树的个数
// 显然 F(0) = 1 F(1) = 1
// 一般情况下 总共i个节点 则剩余i-1个节点可以供左右子树分配
// 左子树用j个节点 右子树用i-1-j个节点
// 可构成F(j)*F(i-1-j)棵树
// j取值 0 - (i-1)
// 则 F(i) = ∑F(j)*F(i-j-1) j∈[0,i-1]
// 卡塔兰数
var numTrees = function (n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n];
};
