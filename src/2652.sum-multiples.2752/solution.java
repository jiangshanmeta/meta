class Solution {
    public int sumOfMultiples(int n) {
        int result = 0;
        for (int i = 2; i <= n; i++) {
            if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
                result += i;
            }
        }
        return result;
    }
}