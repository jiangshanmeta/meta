class Solution {
    public boolean checkIfPangram(String sentence) {
        if (sentence.length() < 26) {
            return false;
        }
        boolean[] exist = new boolean[26];
        int notPresent = 26;
        for (int i = 0; i < sentence.length(); i++) {
            int offset = sentence.charAt(i) - 'a';
            if (!exist[offset]) {
                notPresent--;
                if (notPresent == 0) {
                    return true;
                }
            }
            exist[offset] = true;
        }
        return false;
    }
}