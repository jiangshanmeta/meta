class Solution {
    public boolean halvesAreAlike(String s) {
        int H = s.length() / 2;
        int diff = 0;
        for (int i = 0; i < H; i++) {
            if (isVowel(s.charAt(i))) {
                diff++;
            }
        }
        for (int i = H; i < s.length(); i++) {
            if (isVowel(s.charAt(i))) {
                if (diff == 0) {
                    return false;
                }
                diff--;
            }
        }
        return diff == 0;
    }

    private boolean isVowel(char c) {
        return "aeiouAEIOU".indexOf(c) > -1;
    }
}