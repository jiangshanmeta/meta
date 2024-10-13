class Solution {
    public boolean isThree(int n) {
        int max = (int) Math.sqrt(n);
        int count = 0;
        for (int i = 1; i <= max; i++) {
            if (n % i != 0 || count > 3) {
                continue;
            }
            int rest = n / i;
            if (rest == i) {
                count++;
            } else {
                count += 2;
            }
        }
        return count == 3;
    }
}