class Solution {
    public String makeFancyString(String s) {
        StringBuilder stringBuilder = new StringBuilder();
        char[] chars = s.toCharArray();
        int index = 0;
        while (index<chars.length){
            char c = chars[index++];
            stringBuilder.append(c);
            int cnt = 1;
            while (index<chars.length && chars[index] == c){
                cnt++;
                index++;
            }
            if(cnt>2){
                cnt = 2;
            }
            if(cnt == 2){
                stringBuilder.append(c);
            }
        }
        return stringBuilder.toString();
    }
}