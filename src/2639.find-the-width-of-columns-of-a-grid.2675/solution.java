class Solution {
    public int[] findColumnWidth(int[][] grid) {
        int M = grid.length;
        int N = grid[0].length;
        int[] result = new int[N];
        for (int[] row : grid) {
            for (int j = 0; j < N; j++) {
                result[j] = Math.max(result[j], String.valueOf(row[j]).length());
            }
        }
        return result;
    }
}