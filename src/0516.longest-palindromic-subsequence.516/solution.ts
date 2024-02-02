function longestPalindromeSubseq(s: string): number {
    const n = s.length;
    const dp = new Array<number[]>(n);
    let result = 1;
    for(let i=n-1;i>-1;i--){
        dp[i] = new Array<number>(n).fill(0);
        dp[i][i] = 1;
        for(let j=i+1;j<n;j++){
            dp[i][j] = Math.max(
                dp[i+1][j-1]+ (s[i] === s[j]?2:0) ,
                dp[i][j-1],
                dp[i+1][j]
            )
            result = Math.max(result,dp[i][j]);
        }

    }
    return result
};