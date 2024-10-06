class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        Arrays.sort(arr);
        List<List<Integer>> result = new ArrayList<>();
        int minDiff = arr[1] - arr[0];

        for (int i = 1; i < arr.length; i++) {
            int diff = arr[i] - arr[i - 1];
            if (diff > minDiff) {
                continue;
            }
            if (diff == minDiff) {
                result.add(List.of(arr[i - 1], arr[i]));
            } else {
                minDiff = diff;
                result.clear();
                result.add(List.of(arr[i - 1], arr[i]));
            }
        }
        return result;
    }
}