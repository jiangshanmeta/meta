class Solution {
    public int[][] largestLocal(int[][] grid) {
        int M = grid.length;
        int N = grid[0].length;
        int[][] result = new int[M - 2][N - 2];
        for (int i = 1; i < M - 1; i++) {
            for (int j = 1; j < N - 1; j++) {
                int max = Integer.MIN_VALUE;
                for (int a = i - 1; a <= i + 1; a++) {
                    for (int b = j - 1; b <= j + 1; b++) {
                        max = Math.max(max, grid[a][b]);
                    }
                }
                result[i - 1][j - 1] = max;
            }
        }
        return result;
    }
}