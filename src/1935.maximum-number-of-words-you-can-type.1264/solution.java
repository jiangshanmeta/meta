class Solution {
    public int canBeTypedWords(String text, String brokenLetters) {
        boolean[] brokens = new boolean[26];
        for (char c : brokenLetters.toCharArray()) {
            brokens[c - 'a'] = true;
        }
        int result = 0;
        String[] words = text.split(" ");
        for (String s : words) {
            boolean flag = true;
            for (char c : s.toCharArray()) {
                if (brokens[c - 'a']) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                result++;
            }

        }
        return result;
    }
}