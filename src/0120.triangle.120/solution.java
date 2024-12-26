class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        int N = triangle.size();
        int[] dp = new int[N];
        dp[0] = triangle.getFirst().getFirst();
        for(int i=1;i<N;i++){
            List<Integer> row = triangle.get(i);
            dp[i] = dp[i-1]+row.get(i);
            for(int j=i-1;j>0;j--){
                dp[j] = Math.min(dp[j],dp[j-1])+row.get(j);
            }
            dp[0] += row.getFirst();
        }
        
        int result = Integer.MAX_VALUE;
        for(int n:dp){
            result = Math.min(result,n);
        }
        
        return result;
    }
}