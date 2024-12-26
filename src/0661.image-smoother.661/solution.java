class Solution {
    public int[][] imageSmoother(int[][] img) {
        int M = img.length;
        int N = img[0].length;
        int[][] result = new int[M][N];
        for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                
                int count = 0;
                int sum = 0;
                for(int x=i-1;x<=i+1;x++){
                    for(int y=j-1;y<=j+1;y++){
                        if(x == -1 || y == -1 || x == M || y == N){
                            continue;
                        }
                        count++;
                        sum += img[x][y];
                    }
                }
                result[i][j] = sum/count;
            }
            
        }
        
        
        return result;
    }
}