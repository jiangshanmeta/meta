class Solution {
    public int purchasePlans(int[] nums, int target) {
        Arrays.sort(nums);
        int mod = (int)Math.pow(10,9)+7;
        int result = 0;
        int l = 0;
        int r = nums.length-1;
        while (l<r){
            while (l<r && nums[l]+nums[r]>target){
                r--;
            }
            result = (result+r-l)%mod;
            l++;
        }
        return result;
    }
}