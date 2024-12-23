class Solution {
    public int[][] matrixReshape(int[][] mat, int r, int c) {
        int M = mat.length;
        int N = mat[0].length;
        if(M*N != r*c){
            return mat;
        }
        int[][] result = new int[r][c];
        int index = 0;
        for (int[] ints : mat) {
            for (int j = 0; j < N; j++) {
                int column = index % c;
                int row = index / c;
                result[row][column] = ints[j];
                index++;
            }
        }
        return result;
    }
}