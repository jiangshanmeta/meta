class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int j = nums1.length - 1;
        for (int i = m - 1; i > -1; i--) {
            nums1[j--] = nums1[i];
        }
        j++;
        int k = 0;
        int index = 0;
        while (j < nums1.length && k < n) {
            if (nums1[j] < nums2[k]) {
                nums1[index++] = nums1[j++];
            } else {
                nums1[index++] = nums2[k++];
            }
        }
        while (k < n) {
            nums1[index++] = nums2[k++];
        }

    }
}