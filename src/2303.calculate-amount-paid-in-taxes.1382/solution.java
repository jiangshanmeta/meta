class Solution {
    public double calculateTax(int[][] brackets, int income) {
        double result = 0;
        int prev = 0;
        for (int[] bracket : brackets) {
            int diff = Math.min(income, bracket[0]) - prev;
            prev = bracket[0];
            result += diff * bracket[1] / 100.0;

            if (income <= bracket[0]) {
                break;
            }
        }
        return result;
    }
}