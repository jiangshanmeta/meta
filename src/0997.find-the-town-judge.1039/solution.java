class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] ins = new int[n+1];
        int[] outs = new int[n+1];
        for(int[] row : trust){
            ins[row[1]]++;
            outs[row[0]]++;
        }
        for(int i=1;i<n+1;i++){
            if(ins[i] == n-1 && outs[i] == 0){
                return i;
            }
        }
        return -1;
    }
}