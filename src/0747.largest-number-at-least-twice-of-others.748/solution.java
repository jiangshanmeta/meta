class Solution {
    public int dominantIndex(int[] nums) {
        int max = -1;
        int nextMax = -1;
        int index = -1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                nextMax = max;
                max = nums[i];
                index = i;
            } else if (nums[i] > nextMax) {
                nextMax = nums[i];
            }
        }
        if (max >= nextMax * 2) {
            return index;
        }
        return -1;
    }
}