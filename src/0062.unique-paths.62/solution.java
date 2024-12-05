class Solution {
    public int uniquePaths(int m, int n) {
        int[] dp = new int[n];
        Arrays.fill(dp,1);
        while (m>1){
            m--;
            for(int i=1;i<n;i++){
                dp[i] += dp[i-1];
            }
        }
        return dp[n-1];
    }
}