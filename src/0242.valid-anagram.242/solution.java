class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        int[] counts = new int[26];
        for (char c : s.toCharArray()) {
            counts[c - 'a']++;
        }
        for (char c : t.toCharArray()) {
            int index = c - 'a';
            if (counts[index] == 0) {
                return false;
            }
            counts[index]--;
        }
        return true;
    }
}