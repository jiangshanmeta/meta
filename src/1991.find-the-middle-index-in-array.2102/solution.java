class Solution {
    public int findMiddleIndex(int[] nums) {
        int[] rights = new int[nums.length];
        for(int i= nums.length-2;i>-1;i--){
            rights[i] = rights[i+1]+nums[i+1];
        }
        int left = 0;
        for(int i=0;i<nums.length;i++){
            if(left == rights[i]){
                return i;
            }
            left += nums[i];
        }
        
        return -1;
    }
}