function countSubstrings (s: string): number {
    const dp = new Array<boolean[]>(s.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array<boolean>(s.length);
        dp[i][i] = true;
        for (let j = 0; j <= i; j++) {
            dp[i][j] = true;
        }
    }

    let result = s.length;
    for (let i = s.length - 1; i > -1; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                result++;
            }
        }
    }

    return result;
}
