class Solution {
    public List<Integer> zigzagTraversal(int[][] grid) {
        List<Integer> result = new ArrayList<>();
        int M = grid.length;
        int N = grid[0].length;
        int J = N%2 == 0? N-1:N-2;
        for(int i=0;i<M;i++){
            if(i%2 == 0){
                for(int j=0;j<N;j+=2){
                    result.add(grid[i][j]);
                }
            }else{
                for(int j=J;j>-1;j-=2){
                    result.add(grid[i][j]);
                }
            }
        }


        return result;
    }
}