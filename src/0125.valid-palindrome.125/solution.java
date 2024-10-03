class Solution {
    public boolean isPalindrome(String s) {
        s = s.toLowerCase();
        int left = 0;
        int right = s.length() - 1;
        while (left < right) {
            while (left < right && notMatch(s.charAt(left))) {
                left++;
            }
            while (left < right && notMatch(s.charAt(right))) {
                right--;
            }
            if (left < right && s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    private boolean notMatch(char c) {
        return !Character.isDigit(c) && !Character.isAlphabetic(c);
    }

}