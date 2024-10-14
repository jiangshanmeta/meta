class Solution {
    public int countDigits(int num) {
        int[] counts = new int[10];
        int copy = num;
        while (copy != 0) {
            counts[copy % 10]++;
            copy = copy / 10;
        }
        int result = 0;
        for (int i = 1; i < 10; i++) {
            if (counts[i] == 0) {
                continue;
            }
            if (num % i == 0) {
                result += counts[i];
            }
        }
        return result;
    }
}