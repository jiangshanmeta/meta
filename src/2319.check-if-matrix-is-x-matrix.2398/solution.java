class Solution {
    public boolean checkXMatrix(int[][] grid) {
        int M = grid.length;
        for(int i=0;i<M;i++){
            for(int j=0;j<M;j++){
                if(i == j || i+j == M-1){
                    if(grid[i][j] == 0){
                        return false;
                    }
                }else if(grid[i][j] != 0){
                    return false;
                }

            }
        }
        return true;
    }
}