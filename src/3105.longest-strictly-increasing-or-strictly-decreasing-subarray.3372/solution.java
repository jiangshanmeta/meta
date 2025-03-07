class Solution {
    public int longestMonotonicSubarray(int[] nums) {
        int result = 1;
        int increase = 1;
        int decrease = 1;
        for(int i=1;i< nums.length; i++){
            if(nums[i]>nums[i-1]){
                increase++;
                result = Math.max(result,increase);
            }else{
                increase = 1;
            }
            if(nums[i]<nums[i-1]){
                decrease++;
                result = Math.max(result,decrease);
            }else{
                decrease = 1;
            }
            
        }
        return result;
    }
}