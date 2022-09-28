function numDecodings (s: string): number {
    const dp = new Array(s.length).fill(0);
    dp[0] = s[0] === '0' ? 0 : 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== '0') {
            dp[i] += dp[i - 1];
        }
        const num = +s.slice(i - 1, i + 1);
        if (num > 9 && num < 27) {
            dp[i] += i > 1 ? dp[i - 2] : 1;
        }
    }
    return dp[dp.length - 1];
}
