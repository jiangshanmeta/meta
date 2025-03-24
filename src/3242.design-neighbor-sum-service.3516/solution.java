class NeighborSum {
    int[][] matrix;
    int[] indexs;
    int M;
    int N;
    int[][] adjacentDeltas = new int[][]{
            new int[]{0,-1},
            new int[]{0,1},
            new int[]{-1,0},
            new int[]{1,0}
    };
    
    int[][] diagonalDeltas = new int[][]{
            new int[]{-1,-1},
            new int[]{1,1},
            new int[]{-1,1},
            new int[]{1,-1}
    };
    
    public NeighborSum(int[][] grid) {
        matrix = grid;
        M = grid.length;
        N =grid[0].length;
        indexs = new int[M*N];
        for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                indexs[grid[i][j]] = i*N+j;
            }
        }

    }

    public int adjacentSum(int value) {
        int index = indexs[value];
        int row = index/N;
        int column = index%N;
        
        int sum = 0;
        for(int[] deltas : adjacentDeltas){
            int x = row+deltas[0];
            if(x<0 || x == M){
                continue;
            }
            int y = column+deltas[1];
            if(y<0 || y == N){
                continue;
            }
            sum += matrix[x][y];
        }
        
        return sum;
    }

    public int diagonalSum(int value) {
        int index = indexs[value];
        int row = index/N;
        int column = index%N;

        int sum = 0;
        for(int[] deltas : diagonalDeltas){
            int x = row+deltas[0];
            if(x<0 || x == M){
                continue;
            }
            int y = column+deltas[1];
            if(y<0 || y == N){
                continue;
            }
            sum += matrix[x][y];
        }

        return sum;
    }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * NeighborSum obj = new NeighborSum(grid);
 * int param_1 = obj.adjacentSum(value);
 * int param_2 = obj.diagonalSum(value);
 */