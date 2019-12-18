/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = new Array(5).fill(-Infinity);
    dp[0] = 0;
    for(let i=0;i<prices.length;i++){
        for(let j=4;j>0;j--){
            dp[j] = Math.max(dp[j],dp[j-1]+prices[i]*(j%2===0?1:-1))    
        }    
    }
    return Math.max(...dp);
};