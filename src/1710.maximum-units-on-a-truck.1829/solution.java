class Solution {
    public int maximumUnits(int[][] boxTypes, int truckSize) {
        Arrays.sort(boxTypes, (a, b) -> b[1] - a[1]);

        int result = 0;
        int index = 0;
        while (truckSize > 0 && index < boxTypes.length) {
            if (truckSize < boxTypes[index][0]) {
                result += boxTypes[index][1] * truckSize;
                break;
            } else {
                result += boxTypes[index][0] * boxTypes[index][1];
                truckSize -= boxTypes[index++][0];
            }
        }
        return result;
    }
}