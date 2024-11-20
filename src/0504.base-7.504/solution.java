class Solution {
    public String convertToBase7(int num) {
        if(num == 0){
            return "0";
        }
        StringBuilder stringBuilder = new StringBuilder();
        String sign = "";
        if(num<0){
            sign = "-";
            num = -num;
        }
        while (num != 0){
            stringBuilder.append(num%7);
            num /= 7;
        }
        
        return sign + stringBuilder.reverse().toString();
    }
}