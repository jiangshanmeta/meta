/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// F(n) = min(F(N-coins[i]))+1
var coinChange = function(coins, amount) {
    if(amount === 0){
        return 0;
    }
    const dp = new Array(amount+1).fill(Infinity);
    // 为了减少比较次数而排序
    coins.sort((a,b)=>a-b);
    for(let i=0;i<amount+1;i++){
        let min = Infinity;
        // 状态转移
        for(let j=0;j<coins.length;j++){
            if(coins[j] > i){
                // 已经排序的,后边的硬币面值更大,没必要看了
                break;
            }else if(coins[j]<i){
                // 需要多个硬币兑换,状态转移方程
                if(dp[i-coins[j]]+1 < min){
                    min = dp[i-coins[j]]+1;
                }
            }else if(coins[j] === i){
                // 恰好有一个硬币能直接兑换
                // 也可以初始化dp数组的时候赋值为1
                min = 1;
            }
        }
        dp[i] = min;
    }

    return isFinite(dp[amount])?dp[amount]:-1;
};