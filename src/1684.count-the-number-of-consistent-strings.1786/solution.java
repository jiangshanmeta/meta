class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
        int result = 0;
        boolean[] contains = new boolean[26];
        for (char c : allowed.toCharArray()) {
            contains[c - 'a'] = true;
        }
        for (String word : words) {
            boolean flag = true;
            for (char c : word.toCharArray()) {
                if (!contains[c - 'a']) {
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