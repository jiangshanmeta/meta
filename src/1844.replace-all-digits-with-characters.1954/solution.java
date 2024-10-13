class Solution {
    public String replaceDigits(String s) {
        char[] chars = s.toCharArray();
        for (int i = 0; i < chars.length; i += 2) {
            if (i + 1 < chars.length) {
                chars[i + 1] = (char) (chars[i] + (chars[i + 1] - '0'));
            }

        }
        return String.valueOf(chars);
    }
}