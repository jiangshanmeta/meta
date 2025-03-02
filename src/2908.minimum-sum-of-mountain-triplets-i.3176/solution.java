class Solution {
    public int minimumSum(int[] nums) {
        int[] lefts = new int[nums.length];

        int min = nums[0];
        for(int i=1;i< nums.length-1;i++){
            lefts[i] = min;
            min = Math.min(min,nums[i]);
        }

        int result = Integer.MAX_VALUE;
        boolean found = false;
        min = nums[nums.length-1];
        for(int i=nums.length-2;i>0;i--){
            if(lefts[i]<nums[i] && min<nums[i] ){
                found = true;
                result = Math.min(result, nums[i]+lefts[i]+min   );
            }
            min = Math.min(min,nums[i]);
        }
        if(!found){
            return -1;
        }
        return result;
    }
}