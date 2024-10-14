class Solution {
    public int vowelStrings(String[] words, int left, int right) {
        int result = 0;
        char[] chars = new char[] { 'a', 'e', 'i', 'o', 'u' };

        while (left <= right) {
            boolean l = false;
            boolean r = false;
            for (char c : chars) {
                if (words[left].charAt(0) == c) {
                    l = true;
                }
                if (words[left].charAt(words[left].length() - 1) == c) {
                    r = true;
                }
            }

            if (l && r) {
                result++;
            }

            left++;
        }
        return result;
    }
}