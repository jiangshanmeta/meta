class Solution {
    public int returnToBoundaryCount(int[] nums) {
        int cnt = 0;
        int p = 0;
        for(int n : nums){
            p += n;
            if(p == 0){
                cnt++;
            }
        }
        return cnt;
    }
}