class Solution {
    public int[] constructTransformedArray(int[] nums) {
        int[] result = new int[nums.length];
        int L = nums.length;
        for(int i=0;i<L;i++){
            int index = (i+nums[i])%L;
            if(index<0){
                index += L;
            }
            result[i] = nums[index];
        }
        return result;
    }
}