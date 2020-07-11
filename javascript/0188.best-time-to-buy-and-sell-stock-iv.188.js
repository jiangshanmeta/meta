/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    k = Math.min(k,Math.ceil(prices.length/2))
    const dp = new Array(2*k+1).fill(-Infinity);
    dp[0] = 0;
    for(let i=0;i<prices.length;i++){
        for(let j=dp.length-1;j>0;j--){
            dp[j] = Math.max(dp[j],dp[j-1]+prices[i]*(j%2===0?1:-1));
        }
    }
    return Math.max(...dp);
};