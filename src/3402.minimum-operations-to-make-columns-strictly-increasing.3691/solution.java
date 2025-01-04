class Solution {
    public int minimumOperations(int[][] grid) {
        int M = grid.length;
        int N = grid[0].length;
        int count = 0;
        for(int j=0;j<N;j++){
            for(int i=1;i<M;i++){
                if(grid[i][j]<=grid[i-1][j]){
                    int target = grid[i-1][j]+1;
                    count += target-grid[i][j];
                    grid[i][j] = target;
                }
            }
        }
        return count;
    }
}