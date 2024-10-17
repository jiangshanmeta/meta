class Solution {
    public boolean isPalindrome(String s) {
        int left = 0;
        char[] chars = s.toLowerCase().toCharArray();
        int right = s.length()-1;
        while(left<right){
            while (left<right && noValid(chars[left])){
                left++;
            }
            while (left<right && noValid(chars[right])){
                right--;
            }
            if(left<right && chars[left] != chars[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    private boolean noValid(char c){
        return !Character.isDigit(c) && !Character.isAlphabetic(c);
    }
}