class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        Map<Integer, Long> countMap = Arrays.stream(arr1).boxed()
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        List<Integer> rest = new ArrayList<>();
        List<Integer> result = new ArrayList<>();

        Set<Integer> set = new HashSet<>();

        for (int k : arr2) {
            long count = countMap.get(k);
            for (long j = 0; j < count; j++) {
                result.add(k);
            }
            set.add(k);
        }

        for (int k : arr1) {
            if (!set.contains(k)) {
                rest.add(k);
            }
        }

        rest.sort((a, b) -> a - b);

        result.addAll(rest);

        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}