class Solution {
    public boolean checkValid(int[][] matrix) {
        int N = matrix.length;
        boolean[] exist = new boolean[N];
        for (int[] ints : matrix) {
            for (int n : ints) {
                if (exist[n-1]) {
                    return false;
                }
                exist[n-1] = true;
            }
            Arrays.fill(exist,false);
        }

        for(int j=0;j<N;j++){
            for(int i=0;i<N;i++){
                if(exist[matrix[i][j]-1]){
                    return false;
                }
                exist[matrix[i][j]-1] = true;
            }
            Arrays.fill(exist,false);
        }
        
        return true;
    }
}