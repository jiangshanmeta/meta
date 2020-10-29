function fib(N: number): number {
    const dp = [0,1];
    for(let i=2;i<=N;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[N];
};