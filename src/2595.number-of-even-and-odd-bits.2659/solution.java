class Solution {
    public int[] evenOddBit(int n) {
        int even = 0;
        int odd = 0;
        boolean flag = true;
        while (n > 0) {
            if (n % 2 != 0) {
                if (flag) {
                    even++;
                } else {
                    odd++;
                }
            }
            flag = !flag;

            n >>= 1;
        }
        return new int[] { even, odd };
    }
}