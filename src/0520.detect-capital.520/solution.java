class Solution {
    public boolean detectCapitalUse(String word) {
        char[] chars = word.toCharArray();
        if(Character.isUpperCase(chars[0])){
            boolean hasUpper = false;
            boolean hasLower = false;
            for(int i=1;i<chars.length;i++){
                if(Character.isUpperCase(chars[i])){
                    hasUpper = true;
                }else{
                    hasLower = true;
                }
                
                if(hasLower && hasUpper){
                    return false;
                }
            }
            return true;
        }else{
            for(int i=1;i< chars.length;i++){
                if(Character.isUpperCase(chars[i])){
                    return false;
                }
            }
            return true;
        }
    }
}