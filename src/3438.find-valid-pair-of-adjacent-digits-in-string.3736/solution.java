class Solution {
    public String findValidPair(String s) {
        int[] counts = new int[10];
        char[] chars = s.toCharArray();
        for(char c : chars){
            counts[c-'0']++;
        }
        for(int i=0;i<chars.length-1;i++){
            if(chars[i] == chars[i+1] || counts[chars[i]-'0'] != ( chars[i]-'0')  || counts[chars[i+1]-'0'] != (chars[i+1]-'0') ){
                continue;
            }
            return s.substring(i,i+2);
        }
        return "";
    }
}