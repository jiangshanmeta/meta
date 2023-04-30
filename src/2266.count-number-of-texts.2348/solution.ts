function countTexts (pressedKeys: string): number {
    const mod = 10 ** 9 + 7;
    const map = [0, 0, 3, 3, 3, 3, 3, 4, 3, 4, ];
    const dp = new Array<number>(pressedKeys.length + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < pressedKeys.length; i++) {
        const key = +pressedKeys[i];
        for (let j = 0; j < map[key]; j++) {
            if (i - j < 0 || pressedKeys[i - j] !== pressedKeys[i]) {
                break;
            }
            dp[i + 1] = (dp[i + 1] + dp[i - j]) % mod;
        }
    }

    return dp[dp.length - 1];
}
