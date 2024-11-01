class Solution {
    public int maxSubArray(int[] nums) {
        int result = nums[0];
        int current = 0;
        for(int num : nums){
            current = Math.max(0,current)+num;
            result = Math.max(result,current);
        }
        return result;
    }
}