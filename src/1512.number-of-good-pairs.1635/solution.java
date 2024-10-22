class Solution {
    public int numIdenticalPairs(int[] nums) {
        int cnt = 0;
        int[] counts = new int[101];
        for(int n : nums){
            cnt += counts[n];
            counts[n]++;
        }
        return cnt;
    }
}