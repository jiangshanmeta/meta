class Solution {
    public int[] frequencySort(int[] nums) {
        int[] frequencies = new int[201];
        List<Integer> list = new ArrayList<>();
        for (int n : nums) {
            frequencies[n + 100]++;
            list.add(n);
        }
        list.sort((a, b) -> {
            if (frequencies[a + 100] != frequencies[b + 100]) {
                return frequencies[a + 100] - frequencies[b + 100];
            }
            return b - a;
        });

        for (int i = 0; i < nums.length; i++) {
            nums[i] = list.get(i);
        }
        return nums;
    }
}