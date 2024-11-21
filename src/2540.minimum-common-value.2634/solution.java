class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        int index1 = 0;
        int index2 = 0;
        while (index1<nums1.length && index2<nums2.length){
            int diff = nums2[index2]-nums1[index1];
            if(diff>0){
                index1++;
            }else if(diff<0){
                index2++;
            }else{
                return nums1[index1];
            }
        }
        return -1;
    }
}