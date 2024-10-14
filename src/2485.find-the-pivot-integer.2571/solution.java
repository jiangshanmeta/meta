class Solution {
    public int pivotInteger(int n) {
        int a = (n * n + n) / 2;
        int x = (int) Math.sqrt(a);
        if (x * x == a) {
            return x;
        }

        return -1;
    }
}