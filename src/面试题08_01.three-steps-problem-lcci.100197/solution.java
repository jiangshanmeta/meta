class Solution {
    public int waysToStep(int n) {
        int[] dp = new int[Math.max(n+1,4)];
        dp[0] = 1;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 4;
        int mod = 1000000007;
        for(int i=4;i<=n;i++){
            dp[i] = ( (dp[i-1]+dp[i-2])%mod+dp[i-3])%mod;
        }
        return dp[n];
    }
}