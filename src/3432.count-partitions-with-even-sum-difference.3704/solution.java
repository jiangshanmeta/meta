class Solution {
    public int countPartitions(int[] nums) {
        int L = nums.length;
        int[] rights = new int[L];
        rights[L-1] = nums[L-1];
        for(int i=L-2;i>0;i--){
            rights[i] = rights[i+1]+nums[i];
        }
        int result = 0;
        int left = 0;
        for(int i=0;i<L-1;i++){
            left += nums[i];
            if( (left-rights[i+1])%2 == 0 ){
                result++;
            }
        }
        
        return result;
    }
}