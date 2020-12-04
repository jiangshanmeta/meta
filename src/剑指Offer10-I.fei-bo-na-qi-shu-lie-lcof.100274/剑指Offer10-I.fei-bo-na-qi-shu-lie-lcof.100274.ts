const mod = 10**9+7;
function fib(n: number): number {
    const dp:number[] = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    for(let i=2;i<dp.length;i++){
        dp[i] = (dp[i-1]+dp[i-2])%mod;
    }
    return dp[n];
};