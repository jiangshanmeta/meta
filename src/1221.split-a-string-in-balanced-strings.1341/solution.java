class Solution {
    public int balancedStringSplit(String s) {
        int cnt = 0;
        int d = 0;
        for(char c: s.toCharArray()){
            if(c == 'L'){
                d++;
            }else {
                d--;
            }
            if(d == 0){
                cnt++;
            }
        }
        return cnt;
    }
}