class Solution {
    public int maxOperations(int[] nums) {
        final int score = nums[0]+nums[1];
        int cnt = 1;
        for(int i=2;i+1<nums.length;i+=2){
            if(nums[i]+nums[i+1] == score){
                cnt++;
            }else{
                break;
            }
        }
        return cnt;
    }
}