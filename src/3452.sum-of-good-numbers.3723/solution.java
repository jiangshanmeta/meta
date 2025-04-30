class Solution {
    public int sumOfGoodNumbers(int[] nums, int k) {
        int result = 0;
        for(int i=0;i<nums.length;i++){
            if(i-k>-1 && nums[i]<=nums[i-k]){
                continue;
            }
            if(i+k<nums.length && nums[i]<=nums[i+k]){
                continue;
            }

            result += nums[i];
        }
        return result;
    }
}