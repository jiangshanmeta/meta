class Solution {
    public int countTestedDevices(int[] batteryPercentages) {
        int result = 0;
        for (int battery : batteryPercentages) {
            if (battery > result) {
                result++;
            }
        }
        return result;
    }
}