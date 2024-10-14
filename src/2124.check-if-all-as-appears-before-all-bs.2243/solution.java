class Solution {
    public boolean checkString(String s) {
        boolean bOccur = false;
        for (char c : s.toCharArray()) {
            if (c == 'b') {
                bOccur = true;
            } else if (bOccur) {
                return false;
            }
        }
        return true;
    }
}