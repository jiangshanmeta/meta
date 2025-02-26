class Solution {
    public String makeSmallestPalindrome(String s) {
        char[] chars = s.toCharArray();
        int l = 0;
        int r = chars.length-1;
        while (l<r){
            if(chars[l] != chars[r]){
                char min = chars[l]<chars[r]? chars[l]:chars[r];
                chars[l] = min;
                chars[r] = min;
            }
            l++;
            r--;
        }
        return String.valueOf(chars);
    }
}