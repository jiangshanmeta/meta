class Solution {
    public int lengthOfLastWord(String s) {
        int end = s.length() - 1;
        while (end > -1 && s.charAt(end) == ' ') {
            end--;
        }
        int count = 0;
        while (end > -1 && s.charAt(end) != ' ') {
            count++;
            end--;
        }

        return count;
    }
}