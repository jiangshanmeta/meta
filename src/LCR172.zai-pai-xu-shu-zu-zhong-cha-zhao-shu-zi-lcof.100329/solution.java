class Solution {
    public int countTarget(int[] scores, int target) {
        int cnt = 0;
        for(int s : scores){
            if(s == target){
                cnt++;
            }
        }
        return cnt;
    }
}