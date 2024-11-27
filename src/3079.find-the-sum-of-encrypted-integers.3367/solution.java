class Solution {
    public int sumOfEncryptedInt(int[] nums) {
        int result = 0;
        for(int num : nums){
            result += encrypt(num);
        }
        return result;
    }

    private int encrypt(int num){
        int result = 0;
        int max = 0;
        while (num != 0){
            int digi = num%10;
            max = Math.max(max,digi);
            result = result*10+1;
            num /= 10;
        }
        return result*max;
    }

}