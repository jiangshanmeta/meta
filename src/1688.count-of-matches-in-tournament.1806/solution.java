class Solution {
    public int numberOfMatches(int n) {
        int result = 0;
        while (n > 1) {
            if (n % 2 == 1) {
                n >>= 1;
                result += n;
                n++;
            } else {
                n >>= 1;
                result += n;
            }
        }

        return result;
    }
}