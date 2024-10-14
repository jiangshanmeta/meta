class Solution {
    public String greatestLetter(String s) {
        int[] statistics = new int[26];
        char[] chars = s.toCharArray();
        for (char aChar : chars) {
            if (aChar < 'a') {
                statistics[aChar - 'A'] |= 1;
            } else {
                statistics[aChar - 'a'] |= 2;
            }
        }
        for (int i = 25; i > -1; i--) {
            if (statistics[i] == 3) {
                return String.valueOf((char) (i + 'A'));
            }
        }
        return "";
    }
}