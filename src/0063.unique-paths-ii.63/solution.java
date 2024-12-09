class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int M = obstacleGrid.length;
        int N = obstacleGrid[0].length;
        int[] dp = new int[N];
 
        for(int i=0;i<N;i++){
            if(obstacleGrid[0][i] == 1){
                break;
            }
            dp[i] = 1;
        }

        for(int i=1;i<M;i++){
            if(obstacleGrid[i][0] == 1){
                dp[0] = 0;
            }
            for(int j=1;j<N;j++){
                if(obstacleGrid[i][j] == 1){
                    dp[j] = 0;
                }else{
                    dp[j] += dp[j-1];
                }
            }

        }

        return dp[N-1];
    }
    
}