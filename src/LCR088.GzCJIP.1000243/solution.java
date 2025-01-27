class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] dp = new int[cost.length];
        dp[0] = 0;
        dp[1] = 0;
        for(int i=2;i<dp.length;i++){
            dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2]);
        }
        int L = cost.length;
        return Math.min(dp[L-1]+cost[L-1],dp[L-2]+cost[L-2]);
    }
}