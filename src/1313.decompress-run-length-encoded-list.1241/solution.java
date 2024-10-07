class Solution {
    public int[] decompressRLElist(int[] nums) {
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < nums.length; i += 2) {
            int frq = nums[i];
            int val = nums[i + 1];
            while (frq > 0) {
                frq--;
                list.add(val);
            }
        }
        return list.stream().mapToInt((i) -> i).toArray();
    }
}