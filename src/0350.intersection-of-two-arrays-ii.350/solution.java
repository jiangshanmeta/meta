class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        int[] result = new int[Math.max(nums1.length, nums2.length)];
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int index = 0;
        int index1 = 0;
        int index2 = 0;
        while (index1<nums1.length && index2<nums2.length){
            if(nums1[index1]<nums2[index2]){
                index1++;
            }else if(nums1[index1]>nums2[index2]){
                index2++;
            }else{
                result[index++] = nums1[index1++];
                index2++;
            }
        }
        int[] real = new int[index];
        System.arraycopy(result,0,real,0,index);
        return real;
    }
}