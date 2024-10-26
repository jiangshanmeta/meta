class Solution {
    public int[] getConcatenation(int[] nums) {
        int N = nums.length;
        int[] result = new int[2*N];
        for(int i=0;i<nums.length;i++){
            result[i] = nums[i];
            result[i+N] = nums[i];
        }
        return result;
    }
}