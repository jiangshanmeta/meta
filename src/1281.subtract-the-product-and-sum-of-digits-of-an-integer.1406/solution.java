class Solution {
    public int subtractProductAndSum(int n) {
        int multi = 1;
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            multi *= digit;
            sum += digit;
            n /= 10;
        }
        return multi - sum;
    }
}