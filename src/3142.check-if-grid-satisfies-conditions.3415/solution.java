class Solution {
    public boolean satisfiesConditions(int[][] grid) {
        int M = grid.length;
        int N = grid[0].length;
        for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                if(i+1<M && grid[i][j] != grid[i+1][j]){
                    return false;
                }
                if(j+1<N && grid[i][j] == grid[i][j+1]){
                    return false;
                }
            }
        }
        return true;
    }
}