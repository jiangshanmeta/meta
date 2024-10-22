class Solution {
    public boolean judgeCircle(String moves) {
        int d1 = 0;
        int d2 = 0;
        for(char c : moves.toCharArray()){
            if(c == 'U'){
                d1++;
            }else if(c == 'D'){
                d1--;
            }else if(c == 'L'){
                d2++;
            }else{
                d2--;
            }
        }
        return d1 == 0 && d2 == 0;
    }
}