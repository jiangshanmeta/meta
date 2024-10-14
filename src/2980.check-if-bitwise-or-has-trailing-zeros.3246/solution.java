class Solution {
    public boolean hasTrailingZeros(int[] nums) {
        boolean hasEven = false;
        for (int n : nums) {
            if (n % 2 == 0) {
                if (hasEven) {
                    return true;
                }
                hasEven = true;
            }
        }
        return false;
    }
}