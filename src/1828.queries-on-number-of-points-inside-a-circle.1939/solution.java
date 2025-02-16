class Solution {
    public int[] countPoints(int[][] points, int[][] queries) {
        int[] result = new int[queries.length];
        for(int i=0;i< queries.length;i++){
            result[i] = calcCircle(points, queries[i][0],queries[i][1],queries[i][2]);
        }
        return result;
    }

    private int calcCircle(int[][] points,int x,int y, int r){
        int result = 0;
        int rr = r*r;
        for(int[] point : points ){
            int d = (int) (Math.pow(point[0]-x,2)+Math.pow(point[1]-y,2));
            if(d<=rr){
                result++;
            }
        }
        return result;
    }

}