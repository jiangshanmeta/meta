class Solution {
    public int hardestWorker(int n, int[][] logs) {
        int maxTime = 0;
        int resultId = n;
        int lastTime = 0;
        for(int[] log : logs){
            int id = log[0];
            int time = log[1]-lastTime;
            if(time>maxTime){
                maxTime = time;
                resultId = id;
            }else if(time == maxTime){
                resultId = Math.min(resultId,id);
            }
            lastTime = log[1];
        }
        return resultId;
    }
}