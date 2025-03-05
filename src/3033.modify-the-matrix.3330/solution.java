class Solution {
    public int[][] modifiedMatrix(int[][] matrix) {
        int M = matrix.length;
        int N = matrix[0].length;
        int[] maxs = new int[N];
        for (int[] ints : matrix) {
            for (int j = 0; j < N; j++) {
                maxs[j] = Math.max(maxs[j], ints[j]);
            }
        }
        for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                if(matrix[i][j] == -1){
                    matrix[i][j] = maxs[j];
                }
            }
        }
        return matrix;
    }
}