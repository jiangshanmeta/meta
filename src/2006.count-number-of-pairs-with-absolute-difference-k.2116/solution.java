class Solution {
    public int countKDifference(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        int result = 0;
        for (int n : nums) {
            if (map.containsKey(n + k)) {
                result += map.get(n + k);
            }
            if (map.containsKey(n - k)) {
                result += map.get(n - k);
            }
            map.merge(n, 1, Integer::sum);
        }
        return result;
    }
}