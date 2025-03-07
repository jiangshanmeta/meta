class Solution {
    public boolean isPossibleToSplit(int[] nums) {
        int[] counts = new int[101];
        for(int n : nums){
            counts[n]++;
            if(counts[n] == 3){
                return false;
            }
        }
        return true;
    }
}