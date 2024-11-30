class Solution {
    public boolean isValid(String word) {
        if(word.length()<3){
            return false;
        }
        Set<Character> vowels = Set.of('a','e','i','o','u','A','E','I','O','U');
        boolean yuanyin = false;
        boolean fuyin = false;
        char[] chars = word.toCharArray();
        for(char c : chars){
            if(!isValid(c)){
                return false;
            }
            if( c<'A' ){
                continue;
            }
            if(vowels.contains(c)){
                yuanyin = true;
            }else{
                fuyin = true;
            }
        }
        
        
        return yuanyin && fuyin;
    }
    
    private static boolean isValid(char c){
        return ( c>='0' && c<='9') || (c>='a' && c<='z') || (c>='A' && c<='Z');
    }
    
}