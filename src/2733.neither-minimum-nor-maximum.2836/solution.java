class Solution {
    public int findNonMinOrMax(int[] nums) {
        int max = nums[0];
        int min = nums[0];
        for (int n : nums) {
            max = Math.max(max, n);
            min = Math.min(min, n);
        }
        for (int n : nums) {
            if (n != max && n != min) {
                return n;
            }
        }
        return -1;
    }
}