class Solution {
    public int[] numberOfPairs(int[] nums) {
        int[] counts = new int[101];
        for (int n : nums) {
            counts[n]++;
        }
        int result = 0;
        for (int i = 0; i < counts.length; i++) {
            result += counts[i] >> 1;
        }
        return new int[] { result, nums.length - result * 2 };
    }
}