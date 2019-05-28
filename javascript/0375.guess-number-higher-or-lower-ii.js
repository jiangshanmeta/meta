/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// 对于一个特定的n 我们先选择 一个 m 付出的代价是m 然后分成了两部分[1,m-1] 和 [m+1,n] (如果有的话，考虑边界)
// 对于选择m 需要付出的总代价是 m+ max（两个子序列分别的代价）
// m 取 1-n
// 分成的子集有开始和结尾两个变量，所以是个二位矩阵
// 只有右上这半块有值
var getMoneyAmount = function(n) {
    const dp = new Array(n+1);
    // i 是结尾值 j是开始值
    for(let i=1;i<n+1;i++){
        dp[i] = new Array(n+1);
        dp[i][i] = 0;
        
        for(let j=i-1;j>0;j--){
            const list = [];
            // 对应上面的从1-n取m值
            for(let k=j;k<=i;k++){
                list.push(k+Math.max(k>j?dp[j][k-1]:0,k<i?dp[k+1][i]:0))
            }
            dp[j][i] = Math.min(...list);
        }
    }

    return dp[1][n];
};