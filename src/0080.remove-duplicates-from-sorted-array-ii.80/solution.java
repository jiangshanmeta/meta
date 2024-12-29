class Solution {
    public int removeDuplicates(int[] nums) {
        int targetIndex = 0;
        int loopIndex = 0;
        while (loopIndex< nums.length){
            int n = nums[loopIndex++];
            int count = 1;
            while (loopIndex< nums.length && nums[loopIndex] == n){
                count++;
                loopIndex++;
            }
            count = Math.min(count,2);
            
            while (count>0){
                count--;
                nums[targetIndex++] = n;
            }
        }
        return targetIndex;
    }
}