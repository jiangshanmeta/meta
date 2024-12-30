class Solution {
    int[][] grid;
    int M;
    int N;
    public int maxAreaOfIsland(int[][] grid) {
        this.grid = grid;
        M = grid.length;
        N = grid[0].length;
        
        int result = 0;
        for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                if(grid[i][j] == 1){
                    result = Math.max(result,dfs(i,j));
                }
            }
        }
        
        return result;
    }
    
    private int dfs(int x,int y){
        if(x<0 || y<0 || x == M || y == N || grid[x][y] == 0){
            return 0;
        }
        grid[x][y] = 0;
        
        return 1+dfs(x-1,y)+dfs(x+1,y)+dfs(x,y-1)+dfs(x,y+1);
    }
}