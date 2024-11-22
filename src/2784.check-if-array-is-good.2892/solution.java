class Solution {
    public boolean isGood(int[] nums) {
        int N = nums.length-1;
        boolean[] exists = new boolean[N];
        int cnt = 0;
        for(int n : nums){
            if(n>N){
                return false;
            }
            if(n == N){
                cnt++;
                continue;
            }
            if(exists[n]){
                return false;
            }
            exists[n] = true;
        }
        
        return cnt == 2;
    }
}