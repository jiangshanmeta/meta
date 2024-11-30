class Solution {
    public int addedInteger(int[] nums1, int[] nums2) {
        int min1 = min(nums1);
        int min2 = min(nums2);
        return min2-min1;
    }
    
    private int min(int[] nums){
        int res = nums[0];
        for(int i=1;i<nums.length;i++){
            res = Math.min(res,nums[i]);
        }
        return res;
    }
}