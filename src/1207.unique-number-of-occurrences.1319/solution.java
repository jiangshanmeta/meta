class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        int[] counts = new int[2001];
        for (int k : arr) {
            counts[k + 1000]++;
        }
        Set<Integer> set = new HashSet<>();
        for (int count : counts) {
            if (count == 0) {
                continue;
            }
            if (set.contains(count)) {
                return false;
            }
            set.add(count);
        }
        return true;
    }
}