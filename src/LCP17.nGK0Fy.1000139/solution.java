class Solution {
    public int calculate(String s) {
        int x = 1;
        int y = 0;
        for(char c : s.toCharArray()){
            if(c == 'A'){
                x = x*2 + y;
            }else{
                y = 2*y + x;
            }
        }
        return x+y;
    }
}