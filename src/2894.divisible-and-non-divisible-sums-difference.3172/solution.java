class Solution {
    public int differenceOfSums(int n, int m) {
        int result = 0;
        while (n > 0) {
            if (n % m == 0) {
                result -= n;
            } else {
                result += n;
            }
            n--;
        }
        return result;
    }
}