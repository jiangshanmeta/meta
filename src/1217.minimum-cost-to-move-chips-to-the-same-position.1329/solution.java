class Solution {
    public int minCostToMoveChips(int[] position) {
        int odd = 0;
        int even = 0;
        for (int pos : position) {
            if (pos % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }
        return Math.min(odd, even);
    }
}