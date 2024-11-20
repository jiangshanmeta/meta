class Solution {
    public int searchInsert(int[] nums, int target) {
        int low = 0;
        int high = nums.length-1;
        int result = nums.length;
        while (low<=high){
            int mid = (low+high)>>1;
            if(nums[mid]<target){
                low = mid+1;
            }else{
                result = mid;
                high = mid-1;
            }
        }
        return result;
    }
}