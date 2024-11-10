class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] result = new int[nums.length];
        int N = nums.length/2;
        for(int i=0;i<N;i++){
            result[2*i] = nums[i];
            result[2*i+1] = nums[i+N];
        }
        return result;
    }
}