class Solution {
    public int takeAttendance(int[] records) {
        int n = records.length;
        int sum = n*(n+1)/2;
        for(int num : records){
            sum -= num;
        }
        return sum;
    }
}