class Solution {
    public int findMaxK(int[] nums) {
        int result = -1;
        Set<Integer> set = new HashSet<>();
        for (int n : nums) {
            if (set.contains(-n)) {
                result = Math.max(result, Math.abs(n));
            }
            set.add(n);
        }
        return result;
    }
}