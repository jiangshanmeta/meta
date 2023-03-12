function waysToReachTarget (target: number, types: number[][]): number {
    const N = types.length;
    const mod = 10 ** 9 + 7;
    const dp = new Array<number>(target + 1).fill(0);
    dp[0] = 1;
    for (const [count, mask, ] of types) {
        for (let i = dp.length - 1; i > 0; i--) {
            for (let j = 1; j <= count; j++) {
                const index = i - j * mask;
                if (index < 0) {
                    break;
                }
                dp[i] = (dp[i] + dp[index]) % mod;
            }
        }
    }

    return dp[target];
}
