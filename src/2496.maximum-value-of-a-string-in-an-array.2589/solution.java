class Solution {
    public int maximumValue(String[] strs) {
        int result = 0;
        for (String s : strs) {
            boolean onlyDigital = true;
            char[] chars = s.toCharArray();
            for (char c : chars) {
                if (!Character.isDigit(c)) {
                    onlyDigital = false;
                    break;
                }
            }
            result = Math.max(result, onlyDigital ? Integer.parseInt(s) : s.length());

        }
        return result;
    }
}