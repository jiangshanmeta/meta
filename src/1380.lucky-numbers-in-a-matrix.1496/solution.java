class Solution {
    public List<Integer> luckyNumbers(int[][] matrix) {
        int M = matrix.length;
        int N = matrix[0].length;
        int[] columnMaxs = new int[N];
        System.arraycopy(matrix[0],0,columnMaxs,0,N);
        for(int i=1;i< M;i++){
            for(int j=0;j<N;j++){
                columnMaxs[j] = Math.max(columnMaxs[j],matrix[i][j]);
            }
        }

        List<Integer> result = new ArrayList<>();

        for (int[] ints : matrix) {
            int min = min(ints);
            for (int j = 0; j < N; j++) {
                if (ints[j] == min && ints[j] == columnMaxs[j]) {
                    result.add(ints[j]);
                }
            }
        }


        return result;
    }

    private int min(int[] row){
        int result = row[0];
        for(int n : row){
            result = Math.min(n,result);
        }
        return result;
    }
}