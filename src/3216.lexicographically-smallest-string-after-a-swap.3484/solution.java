class Solution {
    public String getSmallestString(String s) {
        char[] chars = s.toCharArray();
        for(int i=0;i<chars.length-1;i++){
            if( ((int)chars[i]) %2 == ((int)chars[i+1])%2  && chars[i]>chars[i+1]  ){
                char c = chars[i];
                chars[i] = chars[i+1];
                chars[i+1] = c;
                break;
            }
        }
        return String.valueOf(chars);
    }
}