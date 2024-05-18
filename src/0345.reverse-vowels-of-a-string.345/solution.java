class Solution {
    public String reverseVowels(String s) {
        char[] chars = s.toCharArray();
        int l = 0;
        int r = chars.length - 1;
        while (l < r) {
            while (l < r && !isVowel(chars[l])) {
                l++;
            }

            while (l < r && !isVowel(chars[r])) {
                r--;
            }

            if (l < r) {
                char tmp = chars[l];
                chars[l++] = chars[r];
                chars[r--] = tmp;
            }
        }

        return String.valueOf(chars);
    }

    public boolean isVowel(char c) {
        return "aeiouAEIOU".indexOf(c) > -1;
    }
}