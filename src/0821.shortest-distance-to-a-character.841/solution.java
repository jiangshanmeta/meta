import java.util.Arrays;

class Solution {
    public int[] shortestToChar(String s, char c) {
        int[] result = new int[s.length()];
        Arrays.fill(result, s.length());

        int prev = -1;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == c) {
                prev = i;
            }
            if (prev != -1) {
                result[i] = i - prev;
            }
        }
        prev = s.length();
        for (int i = s.length() - 1; i > -1; i--) {
            if (s.charAt(i) == c) {
                prev = i;
            }
            if (prev != s.length()) {
                result[i] = Math.min(result[i], prev - i);
            }

        }

        return result;
    }
}