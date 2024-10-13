class Solution {
    public int maxProductDifference(int[] nums) {
        Arrays.sort(nums);
        int L = nums.length;
        return nums[L - 1] * nums[L - 2] - nums[0] * nums[1];
    }
}