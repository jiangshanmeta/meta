class Solution {
    public int minOperations(int[] nums, int k) {
        int count = (int)Arrays.stream(nums).distinct().count();
        
        int min = nums[0];
        for(int n:nums){
            min = Math.min(min,n);
        }
        if(k>min){
            return -1;
        }
        return count-( k<min?0:1);
    }
}