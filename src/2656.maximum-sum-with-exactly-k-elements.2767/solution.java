class Solution {
    public int maximizeSum(int[] nums, int k) {
        int a = nums[0];
        for (int n : nums) {
            a = Math.max(a, n);
        }
        return k * a + k * (k - 1) / 2;
    }
}