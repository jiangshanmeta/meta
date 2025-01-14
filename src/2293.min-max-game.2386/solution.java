class Solution {
    public int minMaxGame(int[] nums) {
        int L = nums.length;
        while (L>1){
            for(int i=0;i<L>>1;i++){
                if(i%2 == 0){
                    nums[i] = Math.min(nums[2*i],nums[2*i+1]);
                }else{
                    nums[i] = Math.max(nums[2*i],nums[2*i+1]);
                }
            }
            
            L >>= 1;
        }
        return nums[0];
    }
}