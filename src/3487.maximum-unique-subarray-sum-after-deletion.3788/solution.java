class Solution {
    public int maxSum(int[] nums) {
        Arrays.sort(nums);
        int result = 0;
        boolean hasNonNegative = false;
        for(int i= nums.length-1;i>-1;i--){
            if(nums[i]>=0){
                hasNonNegative = true;
            }
            if(i+1< nums.length && nums[i] == nums[i+1] ){
                continue;
            }
            if(nums[i]<0){
                if(!hasNonNegative){
                    result += nums[i];
                }
                break;
            }
            result += nums[i];
            
        }
        
        return result;
    }
}