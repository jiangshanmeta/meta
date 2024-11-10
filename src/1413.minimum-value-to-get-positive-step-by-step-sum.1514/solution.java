class Solution {
    public int minStartValue(int[] nums) {
        int start = 1;
        int result = 0;
        for(int n : nums){
            start += n;
            if(start<1){
                result = Math.max(result,1-start);
            }
        }
        return 1+result;
    }
}