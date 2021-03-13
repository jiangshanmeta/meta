function minimumTotal(triangle: number[][]): number {
    const dp = new Array(triangle.length);
    dp[0] = triangle[0][0];
    for(let i=1;i<triangle.length;i++){
        dp[i] = dp[i-1]+triangle[i][i];
        for(let j=i-1;j>0;j--){
            dp[j] = Math.min(dp[j],dp[j-1])+triangle[i][j];
        }
        dp[0] += triangle[i][0];
    }
    return Math.min(...dp);
};