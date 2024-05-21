class Solution {
    public char findTheDifference(String s, String t) {
        int[] counts = new int[26];
        for (char c : t.toCharArray()) {
            counts[c - 'a']++;
        }
        for (char c : s.toCharArray()) {
            counts[c - 'a']--;
        }
        char res = 'a';
        for (int i = 0; i < counts.length; i++) {
            if (counts[i] != 0) {
                res = (char) (i + 'a');
                break;
            }
        }
        return res;
    }
}