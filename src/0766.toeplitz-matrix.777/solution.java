class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        int M = matrix.length;
        int N = matrix[0].length;
        for(int i=0;i<M;i++){
            if(!match(matrix,i,0,matrix[i][0])){
                return false;
            }
        }
        for(int j=1;j<N;j++){
            if(!match(matrix,0,j,matrix[0][j] )){
                return false;
            }
        }
        return true;
    }
    
    private boolean match(int[][] matrix,int i,int j,int target){
        while(i<matrix.length && j<matrix[0].length){
            if(matrix[i++][j++] != target){
                return false;
            }
        }
        return true;
    }
    
}