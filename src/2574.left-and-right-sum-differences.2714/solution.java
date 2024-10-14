class Solution {
    public int[] leftRightDifference(int[] nums) {
        int[] rights = new int[nums.length];
        int right = 0;
        for (int i = nums.length - 1; i > -1; i--) {
            rights[i] = right;
            right += nums[i];
        }
        int[] result = new int[nums.length];
        int left = 0;
        for (int i = 0; i < nums.length; i++) {
            result[i] = Math.abs(left - rights[i]);
            left += nums[i];
        }
        return result;
    }
}