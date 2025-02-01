class Solution {
    public char dismantlingAction(String arr) {
        char[] chars = arr.toCharArray();
        int[] counts = new int[26];
        for(char c: chars ){
            counts[c-'a']++;
        }
        for(char c:chars){
            if(counts[c-'a'] == 1){
                return c;
            }
        }
        return ' ';
    }
}