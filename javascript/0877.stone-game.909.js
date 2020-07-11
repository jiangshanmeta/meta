/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const rangeSum = new Array(piles.length+1);
    rangeSum[0] = 0;
    for(let i=0;i<piles.length;i++){
        rangeSum[i+1] = rangeSum[i]+piles[i];
    }
    const dp = new Array(piles.length);
    for(let i=dp.length-1;i>-1;i--){
        dp[i] = new Array(piles.length);
        dp[i][i] = piles[i];
        for(let j=i+1;j<piles.length;j++){
            dp[i][j] = Math.max(
                piles[i]+rangeSum[j+1]-rangeSum[i+1]-dp[i+1][j],
                piles[j]+rangeSum[j]-rangeSum[i]-dp[i][j-1],
            );
        }
        
    }
    return dp[0][piles.length-1]>rangeSum[rangeSum.length-1]-dp[0][piles.length-1];
};