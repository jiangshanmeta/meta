class Solution {
    public int subarraySum(int[] nums) {
        int result = 0;
        int[] prefixs = new int[nums.length+1];
        for(int i=0;i< nums.length;i++){
            prefixs[i+1] = prefixs[i]+nums[i];
            int start = Math.max(0,i-nums[i]);
            result += prefixs[i+1]-prefixs[start];
        }
        return result;
    }
}