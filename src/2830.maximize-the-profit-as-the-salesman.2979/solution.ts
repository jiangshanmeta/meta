function maximizeTheProfit (n: number, offers: number[][]): number {
    const dp = new Array<number>(n + 1).fill(0);
    offers.sort((a, b) => a[1] - b[1]);
    let index = 0;
    for (let i = 1; i < dp.length; i++) {
        dp[i] = dp[i - 1];
        while (index < offers.length && offers[index][1] === i - 1) {
            dp[i] = Math.max(dp[i], dp[offers[index][0]] + offers[index][2]);
            index++;
        }
    }
    return dp[n];
}
