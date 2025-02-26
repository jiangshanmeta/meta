class Solution {
    public int matrixSum(int[][] nums) {
        for(int[] row : nums){
            Arrays.sort(row);
        }
        int result = 0;
        for(int j=0;j<nums[0].length;j++){
            int max = nums[0][j];
            for(int i=1;i<nums.length;i++){
                max = Math.max(nums[i][j],max);
            }
            result += max;
        }
        return result;
    }
}