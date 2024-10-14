class Solution {
    public int[] findMissingAndRepeatedValues(int[][] grid) {
        int N = grid.length;
        boolean[] exists = new boolean[N * N];
        int duplicate = 0;
        for (int[] row : grid) {
            for (int n : row) {
                if (exists[n - 1]) {
                    duplicate = n;
                }
                exists[n - 1] = true;
            }
        }
        int lost = 0;
        for (int i = 0; i < exists.length; i++) {
            if (!exists[i]) {
                lost = i + 1;
            }
        }
        return new int[] { duplicate, lost };
    }
}