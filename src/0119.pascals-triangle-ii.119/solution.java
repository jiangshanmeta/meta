class Solution {
    public List<Integer> getRow(int rowIndex) {
        int[] dp = new int[rowIndex+1];
        Arrays.fill(dp,1);

        for(int i=2;i<=rowIndex;i++){
            int[] newDp = Arrays.copyOf(dp,dp.length);
            for(int j=1;j<i;j++){
                newDp[j] = dp[j-1]+dp[j];
            }
            dp = newDp;
        }

        return Arrays.stream(dp).boxed().toList();
    }
}