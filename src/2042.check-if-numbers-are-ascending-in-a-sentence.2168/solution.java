class Solution {
    public boolean areNumbersAscending(String s) {
        int lasNum = 0;
        String[] ss = s.split(" ");
        for (String sss : ss) {
            if (Character.isDigit(sss.charAt(0))) {
                int n = Integer.parseInt(sss);
                if (n <= lasNum) {
                    return false;
                }
                lasNum = n;
            }
        }
        return true;
    }
}