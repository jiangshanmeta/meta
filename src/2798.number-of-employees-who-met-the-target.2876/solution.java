class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int result = 0;
        for (int h : hours) {
            if (h < target) {
                continue;
            }
            result++;
        }
        return result;
    }
}