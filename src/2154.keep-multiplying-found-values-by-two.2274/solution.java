class Solution {
    public int findFinalValue(int[] nums, int original) {
        Set<Integer> set = Arrays.stream(nums).boxed().collect(Collectors.toSet());
        while (set.contains(original)) {
            original *= 2;
        }
        return original;
    }
}