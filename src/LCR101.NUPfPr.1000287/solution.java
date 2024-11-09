class Solution {
    public boolean canPartition(int[] nums) {
        int sum = 0;
        for(int num : nums){
            sum += num;
        }
        if(sum%2 == 1){
            return false;
        }
        int half = sum>>1;
        boolean[] cans = new boolean[half+1];
        cans[0] = true;
        for(int num : nums){
            if(num>half){
                return false;
            }
            for(int i=half;i-num>-1;i--){
                cans[i] = cans[i] || cans[i-num];
            }
        }
        
        return cans[half];
    }
}