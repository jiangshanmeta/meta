class Solution {
    public int countCompleteDayPairs(int[] hours) {
        int D = 24;
        int[] counts = new int[D];
        for(int h : hours){
            counts[h%D]++;
        }
        int result = 0;
        if(counts[0] != 0){
            result += counts[0]*(counts[0]-1)/2;
        }
        if(counts[12] != 0){
            result += counts[12]*(counts[12]-1)/2;
        }
        for(int i=1;i<12;i++){
            result += counts[i]*counts[D-i];
        }
        return result;
    }
}