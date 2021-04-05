function waysToChange(n: number): number {
    const dp:number[] = new Array(n+1).fill(1);
    const coins = [5,10,25];
    for(let i=0;i<coins.length;i++){
        const coin = coins[i];
        for(let j=coin;j<dp.length;j++){
            dp[j] = (dp[j]+dp[j-coin])%1000000007
        }
    }
    return dp[n];
};