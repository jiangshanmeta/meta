class Solution {
    public int countSegments(String s) {
        char[] chars = s.toCharArray();
        int result = 0;
        int index = 0;
        while (index < chars.length) {
            while (index < chars.length && chars[index] == ' ') {
                index++;
            }

            if (index < chars.length) {
                result++;
            }

            while (index < chars.length && chars[index] != ' ') {
                index++;
            }
        }

        return result;
    }
}