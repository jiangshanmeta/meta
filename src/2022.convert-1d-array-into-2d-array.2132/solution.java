class Solution {
    public int[][] construct2DArray(int[] original, int m, int n) {
        if(original.length != m*n){
            return new int[][]{};
        }
        int[][] result = new int[m][n];
        for(int i=0;i<original.length;i++){
            result[i/n][i%n] = original[i];
        }
        
        return result;
    }
}