class Solution {
    public int diagonalSum(int[][] mat) {
        int result = 0;
        int N = mat.length;
        for(int i=0;i<N;i++){
            result += mat[i][i];
            result += mat[i][N-i-1];
        }
        if(N%2 == 1){
            int h = N>>1;
            result -= mat[h][N-h-1];
        }
        return result;
    }
}