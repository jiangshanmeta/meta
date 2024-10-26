class Solution {
    public int largestAltitude(int[] gain) {
        int height = 0;
        int result = 0;
        for(int h : gain){
            height += h;
            result = Math.max(result,height);
        }
        return result;
    }
}