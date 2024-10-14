class Solution {
    public int findClosestNumber(int[] nums) {
        int result = nums[0];
        int abs = Math.abs(nums[0]);
        for (int i = 1; i < nums.length; i++) {
            int diff = Math.abs(nums[i]);
            if (diff < abs || (diff == abs && nums[i] > result)) {
                result = nums[i];
                abs = diff;
            }
        }
        return result;
    }
}