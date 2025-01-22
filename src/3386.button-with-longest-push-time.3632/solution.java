class Solution {
    public int buttonWithLongestTime(int[][] events) {
        int maxTime = events[0][1];
        int result = events[0][0];
        for(int i=1;i<events.length;i++){
            int diff = events[i][1]-events[i-1][1];
            if(diff>maxTime){
                maxTime = diff;
                result = events[i][0];
            }else if(diff == maxTime){
                result = Math.min(result,events[i][0]);
            }
        }
        return result;
    }
}