class Solution {
    public int[] findIntersectionValues(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        for (int num : nums1) {
            set1.add(num);
        }
        Set<Integer> set2 = new HashSet<>();
        for (int num : nums2) {
            set2.add(num);
        }
        int a = 0;
        int b = 0;
        for (int n : nums1) {
            if (set2.contains(n)) {
                a++;
            }
        }
        for (int n : nums2) {
            if (set1.contains(n)) {
                b++;
            }
        }
        return new int[] { a, b };
    }
}