class Solution {
    public int numSpecial(int[][] mat) {
        int M = mat.length;
        int N = mat[0].length;
        int[] rows = new int[M];
        int[] columns = new int[N];
        for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                rows[i] += mat[i][j];
                columns[j] += mat[i][j];
            }
        }
        int result = 0;
        for(int i=0;i<M;i++){
            if(rows[i] != 1){
                continue;
            }
            for(int j=0;j<N;j++){
                if(mat[i][j] ==1 && columns[j] == 1){
                    result++;
                }
            }
        }
        return result;
    }
}