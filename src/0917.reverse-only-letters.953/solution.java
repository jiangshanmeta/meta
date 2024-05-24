class Solution {
    public String reverseOnlyLetters(String s) {
        char[] chars = s.toCharArray();
        int left = 0;
        int right = chars.length - 1;
        while (left < right) {
            while (left < right && !isEnglish(chars[left])) {
                left++;
            }
            while (left < right && !isEnglish(chars[right])) {
                right--;
            }
            if (left < right) {
                char c = chars[left];
                chars[left++] = chars[right];
                chars[right--] = c;
            }

        }

        return String.valueOf(chars);
    }

    private boolean isEnglish(char c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }
}