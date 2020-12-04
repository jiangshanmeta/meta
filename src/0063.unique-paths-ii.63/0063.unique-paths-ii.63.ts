function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const N = obstacleGrid.length;
    if(N === 0){
        return 0;
    }
    const M = obstacleGrid[0].length;
    const dp:number[] = new Array(M);
    dp[0] = obstacleGrid[0][0]^1;
    for(let j=1;j<M;j++){
        dp[j] = (dp[j-1] === 0 || obstacleGrid[0][j] === 1)?0:1;
    }
    for(let i=1;i<N;i++){
        dp[0] = (dp[0] === 0 || obstacleGrid[i][0] === 1)?0:1;
        for(let j=1;j<M;j++){
            dp[j] = obstacleGrid[i][j] === 1?0:dp[j]+dp[j-1];
        }
    }
    return dp[M-1];
};