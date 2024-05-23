class Solution {
    public String reverseWords(String s) {
        int i = 0;
        char[] chars = s.toCharArray();

        while (i < chars.length) {
            while (i < chars.length && chars[i] == ' ') {
                i++;
            }

            int start = i;
            while (i < chars.length && chars[i] != ' ') {
                i++;
            }
            int end = i - 1;
            while (start < end) {
                char tmp = chars[start];
                chars[start++] = chars[end];
                chars[end--] = tmp;
            }

        }
        return String.valueOf(chars);
    }
}