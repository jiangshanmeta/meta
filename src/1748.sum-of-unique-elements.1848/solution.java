class Solution {
    public int sumOfUnique(int[] nums) {
        int result = 0;
        Map<Integer, Long> map = Arrays.stream(nums).boxed()
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        for (Map.Entry<Integer, Long> entry : map.entrySet()) {
            if (entry.getValue() == 1) {
                result += entry.getKey();
            }
        }
        return result;
    }
}