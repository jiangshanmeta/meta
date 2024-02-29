function longestValidParentheses(s: string): number {
    let result = 0;
    const dp = new Array<number>(s.length).fill(0);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '(') {
            continue;
        }
        const left = i - dp[i - 1] - 1;
        if (left < 0 || s[left] !== '(') {
            continue
        }

        let count = dp[i - 1] + 2;
        let index = i - dp[i - 1] - 2
        if (index > -1) {
            count += dp[index];
        }
        dp[i] = count;
        result = Math.max(result, count);
    }
    return result
};