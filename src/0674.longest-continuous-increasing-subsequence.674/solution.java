class Solution {
    public int findLengthOfLCIS(int[] nums) {
        int result = 0;
        int index = 0;
        while (index< nums.length){
            int count = 1;
            index++;
            while (index< nums.length && nums[index-1]<nums[index]){
                index++;
                count++;
            }
            result = Math.max(result,count);
        }
        return result;
    }
}