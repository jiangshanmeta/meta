class Solution {
    public int percentageLetter(String s, char letter) {
        int count = 0;
        char[] chars = s.toCharArray();
        for (char c : chars) {
            if (c == letter) {
                count++;
            }
        }
        return count * 100 / s.length();
    }
}