class Solution {
    public boolean isUnique(String astr) {
        char[] chars = astr.toCharArray();
        int flag = 0;
        for(char c : chars){
            if( (flag & (1 << ( c-'a' ) )) != 0 ){
                return false;
            }
            flag |= 1 << (c-'a');
        }
        return true;
    }
}