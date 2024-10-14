class Solution {
    public char repeatedCharacter(String s) {
        char[] chars = s.toCharArray();
        boolean[] exists = new boolean[26];
        for (char c : chars) {
            int index = c - 'a';
            if (exists[index]) {
                return c;
            } else {
                exists[index] = true;
            }
        }
        return ' ';
    }
}