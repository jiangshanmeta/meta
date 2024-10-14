class Solution {
    public int findKOr(int[] nums, int k) {
        int result = 0;
        int offset = 1;
        for (int i = 0; i < 31; i++) {
            int cnt = 0;
            for (int n : nums) {
                if ((n & offset) != 0) {
                    cnt++;
                    if (cnt >= k) {
                        break;
                    }
                }
            }
            if (cnt >= k) {
                result |= offset;
            }
            offset <<= 1;
        }
        return result;
    }
}