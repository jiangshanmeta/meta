class Solution {
    public int numberOfPairs(int[] nums1, int[] nums2, int k) {
        int result = 0;
        for(int n1 : nums1){
            for(int n2 : nums2){
                if(n1%(n2*k) == 0){
                    result++;
                }
            }
        }
        return result;
    }
}