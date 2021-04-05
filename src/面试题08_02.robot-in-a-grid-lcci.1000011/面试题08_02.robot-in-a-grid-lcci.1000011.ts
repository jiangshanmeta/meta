function pathWithObstacles(obstacleGrid: number[][]): number[][] {
    const R = obstacleGrid.length;
    const C = obstacleGrid[0].length;
    const dp:boolean[][] = new Array(R);
    for(let i=0;i<R;i++){
        dp[i] = new Array(C).fill(false);
    }
    dp[0][0] = obstacleGrid[0][0] === 0;
    for(let j=1;j<C;j++){
        dp[0][j] = dp[0][j-1] && obstacleGrid[0][j] === 0;
    }
    for(let i=1;i<R;i++){
        dp[i][0] = dp[i-1][0] && obstacleGrid[i][0] === 0;
        for(let j=1;j<C;j++){
            dp[i][j] = obstacleGrid[i][j] === 0 && (dp[i][j-1] || dp[i-1][j]);
        }
    }
    if(!dp[R-1][C-1]){
        return [];
    }
    let x = R-1;
    let y = C-1;
    const result:number[][] = [[x,y]];
    while(x !== 0 || y !== 0){
        if(x>0 && y>0){
            if(dp[x-1][y]){
                x--;
            }else{
                y--;
            }
        }else if(x>0){
            x--;
        }else{
            y--;
        }
        result.push([x,y])
    }
    return result.reverse();
};