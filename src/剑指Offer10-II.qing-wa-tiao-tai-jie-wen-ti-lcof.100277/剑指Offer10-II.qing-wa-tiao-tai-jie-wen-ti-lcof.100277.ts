function numWays(n: number): number {
    const dp:number[] = [1,1];
    for(let i=2;i<n+1;i++){
        dp[i] = (dp[i-1]+dp[i-2])%1000000007
    }
    return dp[n]
};