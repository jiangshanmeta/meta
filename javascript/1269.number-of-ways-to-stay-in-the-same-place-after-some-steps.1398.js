/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    const L = Math.min(steps,arrLen);
    const mod = 10**9+7;
    let dp = new Array(L).fill(0);
    dp[0] = 1;
    for(let i=0;i<steps;i++){
        const nextDp = new Array(L);
        for(let j=0;j<L;j++){
            nextDp[j] = (dp[j]+(j>0?dp[j-1]:0)+(j+1<L?dp[j+1]:0))%mod;
        }
        dp = nextDp;
    }
    return dp[0]%mod;
};