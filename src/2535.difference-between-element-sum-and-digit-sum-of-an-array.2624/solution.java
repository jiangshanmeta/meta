class Solution {
    public int differenceOfSum(int[] nums) {
        int result = 0;
        for (int n : nums) {
            result += n;
            while (n > 0) {
                result -= n % 10;
                n /= 10;
            }
        }

        return Math.abs(result);
    }
}