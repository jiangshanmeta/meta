class Solution {
    public boolean canMakeSquare(char[][] grid) {
        for(int i=0;i<2;i++){
            for(int j=0;j<2;j++){
                int count = 0;
                if(grid[i][j] == 'B'){
                    count++;
                }
                if(grid[i+1][j] == 'B'){
                    count++;
                }
                if(grid[i][j+1] == 'B'){
                    count++;
                }
                if(grid[i+1][j+1] == 'B'){
                    count++;
                }
                if(count != 2){
                    return true;
                }
            }
        }
        return false;
    }
}