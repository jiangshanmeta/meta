class Solution {
    public int duplicateNumbersXOR(int[] nums) {
        int[] counts = new int[51];
        for(int n:nums){
            counts[n]++;
        }
        int result = 0;
        for(int i=1;i<counts.length;i++){
            if(counts[i] == 2){
                result ^= i;
            }
        }
        return result;
    }
}