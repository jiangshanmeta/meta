class Solution {
    public int countPrefixes(String[] words, String s) {
        int result = 0;
        for (String word : words) {
            if (s.startsWith(word)) {
                result++;
            }
        }
        return result;
    }
}