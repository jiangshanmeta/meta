class Solution {
    public int jewelleryValue(int[][] frame) {
        int M = frame.length;
        int N = frame[0].length;
        int[] dp = new int[N];
        dp[0] = frame[0][0];
        for(int j=1;j<N;j++){
            dp[j] = dp[j-1]+frame[0][j];
        }
        for(int i=1;i<M;i++){
            dp[0] += frame[i][0];
            for(int j=1;j<N;j++){
                dp[j] = Math.max(dp[j],dp[j-1])+frame[i][j];
            }
        }
        return dp[N-1];
    }
}