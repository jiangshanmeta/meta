class Solution {
    public int minPathSum(int[][] grid) {
        int M = grid.length;
        int N = grid[0].length;
        int[] dp = new int[N];
        dp[0] = grid[0][0];
        for(int j=1;j<N;j++){
            dp[j] = dp[j-1]+grid[0][j];
        }
        for(int i=1;i<M;i++){
            dp[0] += grid[i][0];
            for(int j=1;j<N;j++){
                dp[j] = Math.min(dp[j],dp[j-1])+grid[i][j];
            }
        }
        return dp[N-1];
    }
}