class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int result = 0;
        for (String s : operations) {
            if (s.charAt(0) == '+' || s.charAt(2) == '+') {
                result++;
            } else {
                result--;
            }
        }
        return result;
    }
}