class Solution {
    public boolean hasSpecialSubstring(String s, int k) {
        char[] chars = s.toCharArray();
        int start = 0;
        int end = 0;
        while (start+k<= chars.length){
            boolean check = true;
            while (end-start<k){
                if(chars[end] != chars[start]){
                    check = false;
                    break;
                }
                end++;
            }
            if(!check){
                start = end;
                continue;
            }
            if( (start>0 && chars[start] == chars[start-1]) || (end< chars.length && chars[end] == chars[start]  )   ){
                start = end;
                continue;
            }
            return true;
        }
        return false;
    }
}