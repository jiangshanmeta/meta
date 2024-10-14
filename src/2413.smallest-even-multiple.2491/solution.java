class Solution {
    public int smallestEvenMultiple(int n) {
        if (n % 2 == 0) {
            return n;
        }
        return 2 * n;
    }
}