class Solution {
    public int prefixCount(String[] words, String pref) {
        int result = 0;
        for (String s : words) {
            if (s.startsWith(pref)) {
                result++;
            }
        }
        return result;
    }
}