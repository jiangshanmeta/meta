class Solution {
    public String largestOddNumber(String num) {
        char[] chars = num.toCharArray();
        int index = chars.length-1;
        while(index>0){
            if( (chars[index]-'0')%2 == 1 ){
                return num.substring(0,index+1);
            }
            index--;
        }
        return "";
    }
}