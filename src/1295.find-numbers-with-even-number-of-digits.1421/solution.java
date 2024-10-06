class Solution {
    public int findNumbers(int[] nums) {
        int count = 0;
        for (int n : nums) {
            String s = String.valueOf(n);
            if (s.length() % 2 == 0) {
                count++;
            }
        }
        return count;
    }
}