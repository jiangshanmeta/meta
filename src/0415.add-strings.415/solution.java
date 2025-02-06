class Solution {
    public String addStrings(String num1, String num2) {
        StringBuilder stringBuilder = new StringBuilder();
        int index1 = num1.length()-1;
        int index2 = num2.length()-1;
        char[] chars1 = num1.toCharArray();
        char[] chars2 = num2.toCharArray();
        int sum = 0;
        int rest = 0;
        while (index1>-1 && index2>-1){
            int a = chars1[index1--]-'0';
            int b = chars2[index2--]-'0';
            sum = a+b+rest;
            stringBuilder.append(sum%10);
            rest = sum/10;
        }

        while (index1>-1){
            sum = (chars1[index1--]-'0')+rest;
            stringBuilder.append(sum%10);
            rest = sum/10;
        }

        while (index2>-1){
            sum = (chars2[index2--]-'0')+rest;
            stringBuilder.append(sum%10);
            rest = sum/10;
        }
        if(rest != 0){
            stringBuilder.append(rest);
        }

        return stringBuilder.reverse().toString();
    }
}