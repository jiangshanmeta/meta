class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        var numWithIndex = new int[nums.length][2];
        for (int i = 0; i < nums.length; i++) {
            numWithIndex[i][0] = nums[i];
            numWithIndex[i][1] = i;
        }
        Arrays.sort(numWithIndex, (a, b) -> a[0] - b[0]);

        int[] result = new int[nums.length];
        for (int i = 0; i < numWithIndex.length; i++) {
            if (i == 0 || numWithIndex[i - 1][0] != numWithIndex[i][0]) {
                result[numWithIndex[i][1]] = i;
            } else {
                result[numWithIndex[i][1]] = result[numWithIndex[i - 1][1]];
            }
        }
        return result;
    }
}