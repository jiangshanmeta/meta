class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int result = 0;
        int index = 0;
        while (index<nums.length){
            if(nums[index++] == 0){
                continue;
            }
            int cnt = 1;
            while(index<nums.length && nums[index] == 1){
                cnt++;
                index++;
            }
            result = Math.max(result,cnt);
        }
        return result;
    }
}