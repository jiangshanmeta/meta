class Solution {
    public int secondHighest(String s) {
        char[] chars = s.toCharArray();
        char a = '0'-1;
        char b = '0'-1;
        for(char c:chars){
            if(!Character.isDigit(c)){
                continue;
            }
            if(c>a){
                b = a;
                a = c;
            }else if(c>b && c<a){
                b = c;
            }
        }
        return b == '0'-1?-1:b-'0';
    }
}