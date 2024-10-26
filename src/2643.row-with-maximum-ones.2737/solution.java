class Solution {
    public int[] rowAndMaximumOnes(int[][] mat) {
        int row = 0;
        int cnt = 0;
        int M = mat.length;
        for(int i=0;i<M;i++){
            int c = 0;
            for(int n : mat[i]){
                c += n;
            }
            if(c>cnt){
                row = i;
                cnt = c;
            }
        }
        return new int[]{row,cnt};
    }
}