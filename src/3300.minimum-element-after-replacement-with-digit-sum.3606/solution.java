class Solution {
    public int minElement(int[] nums) {
        int result = Integer.MAX_VALUE;
        for(int n : nums){
            result = Math.min(result,calc(n));
        }
        return result;
    }

    private int calc(int num){
        int n = 0;
        while (num != 0){
            n += num%10;
            num /= 10;
        }
        return n;
    }
}