class Solution {
    public void moveZeroes(int[] nums) {
        int offset = 0;
        int index = 0;
        while (index<nums.length){
            if(nums[index] != 0){
                nums[offset++] = nums[index];
            }
            index++;
        }
        while (offset<nums.length){
            nums[offset++] = 0;
        }

    }
}