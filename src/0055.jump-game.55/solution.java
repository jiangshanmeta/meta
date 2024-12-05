class Solution {
    public boolean canJump(int[] nums) {
        int maxIndex = 0;
        int index = 0;
        while (index<nums.length && index<=maxIndex){
            maxIndex = Math.max(maxIndex,index+nums[index]);
            index++;
        }
        return maxIndex>= nums.length-1;
    }
}