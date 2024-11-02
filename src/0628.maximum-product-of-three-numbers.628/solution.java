class Solution {
    public int maximumProduct(int[] nums) {
        Arrays.sort(nums);
        int N = nums.length;
        
        return max(nums[0]*nums[1]*nums[2],nums[N-1]*nums[N-2]*nums[N-3],nums[0]*nums[N-1]*nums[N-2],nums[0]*nums[1]*nums[N-1]   );
    }
    
    private int max(int... nums){
        int result = nums[0];
        for(int n : nums){
            result = Math.max(result,n);
        }
        return result;
    }
}