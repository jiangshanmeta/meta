class Solution {
    public int maxFrequencyElements(int[] nums) {
        int[] counts = new int[101];
        for(int n:nums){
            counts[n]++;
        }
        int max = 0;
        int result = 0;
        for(int n:counts){
            if(n>max){
                max = n;
                result = n;
            }else if(n == max){
                result += n;
            }
        }
        return result;
    }
}