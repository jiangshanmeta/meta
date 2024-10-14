class Solution {
    public int countAsterisks(String s) {
        char[] chars = s.toCharArray();
        boolean status = false;
        int result = 0;
        for (char c : chars) {
            if (c == '|') {
                status = !status;
            } else if (!status && c == '*') {
                result++;
            }

        }
        return result;
    }
}