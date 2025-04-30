class Solution {
    public int[] transformArray(int[] nums) {

        int even = 0;
        for(int n : nums){
            if(n%2 == 0){
                even++;
            }
        }
        Arrays.fill(nums,0,even,0);
        Arrays.fill(nums,even,nums.length,1);
        return nums;
    }
}