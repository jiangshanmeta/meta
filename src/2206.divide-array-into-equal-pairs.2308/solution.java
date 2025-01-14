class Solution {
    public boolean divideArray(int[] nums) {
        boolean[] flags = new boolean[501];
        for(int n : nums){
            flags[n] = !flags[n];
        }
        for(boolean flag : flags){
            if(flag){
                return false;
            }
        }
        return true;
    }
}