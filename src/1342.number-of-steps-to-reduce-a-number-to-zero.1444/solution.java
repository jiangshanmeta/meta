class Solution {
    public int numberOfSteps(int num) {
        int result = 0;
        while (num > 0) {
            if (num % 2 == 0) {
                num >>= 1;
            } else {
                num--;
            }
            result++;
        }
        return result;
    }
}