class Solution {
    public int maxAscendingSum(int[] nums) {
        int result = 0;
        int index = 0;
        while(index<nums.length){
            int sum = nums[index++];
            while(index<nums.length && nums[index]>nums[index-1]){
                sum += nums[index++];
            }
            result = Math.max(result,sum);
        }
        return result;
    }
}