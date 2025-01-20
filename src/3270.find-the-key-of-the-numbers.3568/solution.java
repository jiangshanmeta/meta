class Solution {
    public int generateKey(int num1, int num2, int num3) {
        char[] chars1 = format(num1).toCharArray();
        char[] chars2 = format(num2).toCharArray();
        char[] chars3 = format(num3).toCharArray();

        char[] result = new char[4];
        for(int i=0;i<4;i++){
            result[i] = min(chars1[i],chars2[i],chars3[i]);
        }
        int num = 0;
        for(int i=0;i<4;i++){
            num = num*10 + (result[i]-'0');
        }

        return num;
    }

    private String format(int num){
        String s = String.valueOf(num);
        return "0".repeat(4-s.length())+s;
    }

    private char min(char c1,char c2,char c3){
        if(c2<c1){
            c1 = c2;
        }
        if(c3<c1){
            c1 = c3;
        }
        return c1;
    }


}