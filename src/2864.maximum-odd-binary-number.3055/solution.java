class Solution {
    public String maximumOddBinaryNumber(String s) {
        char[] chars = s.toCharArray();
        int count = -1;
        for (char c : chars) {
            if (c == '1') {
                count++;
            }
        }
        chars[chars.length - 1] = '1';
        int index = count;

        while (count > 0) {
            chars[--count] = '1';
        }

        while (index < chars.length - 1) {
            chars[index++] = '0';
        }

        return String.valueOf(chars);
    }
}