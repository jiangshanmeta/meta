function minExtraChar (s: string, dictionary: string[]): number {
    dictionary.sort((a, b) => a.length - b.length);
    const dp = new Array<number>(s.length + 1);
    dp[0] = 0;
    for (let i = 0; i < s.length; i++) {
        dp[i + 1] = dp[i] + 1;
        for (let j = 0; j < dictionary.length; j++) {
            if (dictionary[j].length > i + 1) {
                break;
            }
            const str = s.slice(i - dictionary[j].length + 1, i + 1);

            if (str === dictionary[j]) {
                dp[i + 1] = Math.min(dp[i + 1], dp[i - dictionary[j].length + 1]);
            }
        }
    }

    return dp[s.length];
}
