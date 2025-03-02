class Solution {
    public long maximumTripletValue(int[] nums) {
        long result = 0;
        int diff = Math.max(0, nums[0]-nums[1]);
        int max= Math.max(nums[0],nums[1]);
        for(int k=2;k<nums.length;k++){
            result = Math.max(result , diff*(long)nums[k]  );
            diff = Math.max(diff, max-nums[k] );
            max = Math.max(max, nums[k] );
        }

        return result;
    }
}