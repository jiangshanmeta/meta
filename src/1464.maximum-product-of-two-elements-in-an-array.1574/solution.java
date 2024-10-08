class Solution {
    public int maxProduct(int[] nums) {
        int max = 0;
        int nextMax = 0;
        for (int n : nums) {
            if (n >= max) {
                nextMax = max;
                max = n;
            } else if (n > nextMax) {
                nextMax = n;
            }
        }
        return (max - 1) * (nextMax - 1);
    }
}