class Solution {
    public int maximumDifference(int[] nums) {
        int result = -1;
        int min = nums[0];
        for(int i=1;i<nums.length;i++){
            if(nums[i] != min){
                result = Math.max(result,nums[i]-min);
            }
            min = Math.min(min,nums[i]);
        }
        return result;
    }
}