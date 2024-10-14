class Solution {
    public boolean digitCount(String num) {
        int[] counts = new int[10];
        char[] chars = num.toCharArray();
        for (char c : chars) {
            counts[c - '0']++;
        }
        for (int i = 0; i < chars.length; i++) {
            if (counts[i] != chars[i] - '0') {
                return false;
            }
        }
        return true;
    }
}