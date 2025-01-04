class Solution {
    public String compressString(String S) {
        StringBuilder stringBuilder = new StringBuilder();
        int index = 0;
        char[] chars = S.toCharArray();
        while (index<chars.length){
            char c = chars[index++];
            int cnt = 1;
            while (index<chars.length && chars[index] == c){
                cnt++;
                index++;
            }
            stringBuilder.append(c);
            stringBuilder.append(cnt);
        }
        if(stringBuilder.length()<S.length()){
            return stringBuilder.toString();
        }
        return S;
    }
}