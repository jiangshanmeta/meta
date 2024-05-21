class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] counts = new int[26];
        for (char c : magazine.toCharArray()) {
            counts[c - 'a']++;
        }
        for (char c : ransomNote.toCharArray()) {
            int index = c - 'a';
            if (counts[index] == 0) {
                return false;
            }
            counts[index]--;
        }
        return true;
    }
}