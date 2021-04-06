function numSquares (n: number): number {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    const candidate = [1, ];
    let base = 2;
    let square = 4;
    while (square <= n) {
        candidate.push(square);
        base++;
        square = base * base;
    }

    for (let i = 2; i <= n; i++) {
        dp[i] = i;
        for (let j = 0; j < candidate.length; j++) {
            if (i - candidate[j] < 0) {
                break;
            }
            dp[i] = Math.min(dp[i], dp[i - candidate[j]] + 1);
        }
    }
    return dp[n];
}
