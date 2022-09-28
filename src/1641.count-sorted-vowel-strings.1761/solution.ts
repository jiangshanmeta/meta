function countVowelStrings (n: number): number {
    const dp = [1, 1, 1, 1, 1, ];
    for (let i = 2; i <= n; i++) {
        for (let j = 4; j > 0; j--) {
            for (let k = 0; k < j; k++) {
                dp[j] += dp[k];
            }
        }
    }
    return dp.reduce((sum, item) => {
        return sum + item;
    }, 0);
}
