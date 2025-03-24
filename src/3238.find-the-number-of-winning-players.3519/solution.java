class Solution {
    public int winningPlayerCount(int n, int[][] pick) {
        int[][] counts = new int[n][11];
        for(int[] row : pick){
            counts[row[0]][row[1]]++;
        }

        int result = 0;
        for(int i=0;i<n;i++){
            for(int j=0;j<11;j++){
                if(counts[i][j]>i){
                    result++;
                    break;
                }
            }
        }
        
        return result;
    }
}