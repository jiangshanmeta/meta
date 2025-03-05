class Solution {
    public int areaOfMaxDiagonal(int[][] dimensions) {
        int area = 0;
        int diagonal = 0;
        for(int[] rectangle : dimensions){
            int d = rectangle[0]*rectangle[0]+rectangle[1]*rectangle[1];
            if(d>diagonal || (d == diagonal && rectangle[0]*rectangle[1]>area)){
                diagonal = d;
                area = rectangle[0]*rectangle[1];
            }
        }
        return area;
    }
}