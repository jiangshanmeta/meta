class Solution {
    public int minTimeToVisitAllPoints(int[][] points) {
        int result = 0;
        for(int i=0;i<points.length-1;i++){
            result += Math.max(Math.abs(points[i+1][0]-points[i][0]),Math.abs(points[i+1][1]-points[i][1])  );
        }
        return result;
    }
}