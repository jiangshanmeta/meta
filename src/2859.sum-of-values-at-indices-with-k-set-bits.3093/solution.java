class Solution {
    public int sumIndicesWithKSetBits(List<Integer> nums, int k) {
        int result = 0;
        for (int i = 0; i < nums.size(); i++) {
            int n = i;
            int cnt = 0;
            while (n != 0) {
                cnt++;
                n &= (n - 1);
            }

            if (cnt == k) {
                result += nums.get(i);
            }
        }
        return result;
    }
}