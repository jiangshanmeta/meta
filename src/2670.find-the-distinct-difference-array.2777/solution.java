class Solution {
    public int[] distinctDifferenceArray(int[] nums) {
        int[] result = new int[nums.length];
        Set<Integer> set = new HashSet<>();
        int[] suffixs = new int[nums.length];
        for (int i = nums.length - 1; i > 0; i--) {
            set.add(nums[i]);
            suffixs[i] = set.size();
        }

        set.clear();

        for (int i = 0; i < nums.length - 1; i++) {
            set.add(nums[i]);
            result[i] = set.size() - suffixs[i + 1];
        }
        set.add(nums[nums.length - 1]);
        result[nums.length - 1] = set.size();

        return result;
    }
}