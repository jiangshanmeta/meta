function numDecodings(s: string): number {
    const mod = 10 ** 9 + 7;
    const dp = new Array<number>(s.length + 1).fill(0)
    dp[0] = 1;
    const set = new Set('789')
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            if (s[i] !== '0') {
                dp[i + 1] = (dp[i + 1] + 9 * dp[i]) % mod;
            }

            if (i === 0) {
                continue
            }
            if (s[i - 1] === '1') {
                dp[i + 1] = (dp[i + 1] + 9 * dp[i - 1]) % mod
            } else if (s[i - 1] === '2') {
                dp[i + 1] = (dp[i + 1] + 6 * dp[i - 1]) % mod
            } else if (s[i - 1] === '*') {
                dp[i + 1] = (dp[i + 1] + 15 * dp[i - 1]) % mod;
            }

        } else {
            if (s[i] !== '0') {
                dp[i + 1] = (dp[i + 1] + dp[i]) % mod;
            }

            if (i === 0) {
                continue
            }

            if (s[i - 1] === '1') {
                dp[i + 1] = (dp[i + 1] + dp[i - 1]) % mod;
            } else if (s[i - 1] === '2') {
                if (!set.has(s[i])) {
                    dp[i + 1] = (dp[i + 1] + dp[i - 1]) % mod;
                }

            } else if (s[i - 1] === '*') {
                if (set.has(s[i])) {
                    dp[i + 1] = (dp[i + 1] + dp[i - 1]) % mod;
                } else {
                    dp[i + 1] = (dp[i + 1] + 2 * dp[i - 1]) % mod;
                }
            }


        }

    }

    return dp[s.length];
};