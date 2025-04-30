class Solution {
    public int minimumOperations(int[] nums) {
        int[] counts = new int[101];
        int duplicate = 0;
        for(int n:nums){
            counts[n]++;
            if(counts[n] == 2){
                duplicate++;
            }
        }
        int result = 0;
        while (duplicate>0){

            for(int i=3*result;i<Math.min(nums.length, (result+1)*3);i++ ){
                int n = nums[i];
                counts[n]--;
                if(counts[n] == 1){
                    duplicate--;
                }
                
            }

            result++;
        }

        return result;
    }
}