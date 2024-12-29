class Solution {
    public int[] plusOne(int[] digits) {
        int addon = 1;
        for(int i=digits.length-1;i>-1;i--){
            int sum = digits[i]+addon;
            digits[i] = sum%10;
            addon = sum/10;
        }
        if(addon == 0){
            return digits;
        }
        
        int[] result = new int[digits.length+1];
        result[0] = addon;
        System.arraycopy(digits,0,result,1,digits.length);
        return result;
    }
}