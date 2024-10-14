class Solution {
    public int deleteGreatestValue(int[][] grid) {
        int M = grid.length;
        int N = grid[0].length;
        for (int i = 0; i < grid.length; i++) {
            Arrays.sort(grid[i]);
        }
        int result = 0;
        for (int j = 0; j < N; j++) {
            int max = 0;
            for (int[] row : grid) {
                max = Math.max(max, row[j]);
            }
            result += max;
        }
        return result;
    }
}