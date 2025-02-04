class Solution {
    int originColor;
    int R;
    int C;
    int[][] image;
    int newColor;
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        originColor = image[sr][sc];
        R = image.length;
        C = image[0].length;
        this.image = image;
        this.newColor = newColor;
        if(originColor == newColor){
            return image;
        }
        dfs(sr,sc);

        return image;
    }

    private void dfs(int r,int c){
        if(r == -1 || c == -1 || r == R || c == C || image[r][c] != originColor){
            return;
        }
        image[r][c] = newColor;
        
        dfs(r-1,c);
        dfs(r+1,c);
        dfs(r,c-1);
        dfs(r,c+1);
        
    }
}