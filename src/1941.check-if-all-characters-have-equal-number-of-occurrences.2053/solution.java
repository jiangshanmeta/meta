class Solution {
    public boolean areOccurrencesEqual(String s) {
        int[] counts = new int[26];
        for(char c : s.toCharArray()){
            counts[c-'a']++;
        }
        int base = 0;
        for(int c : counts){
            if(c == 0){
                continue;
            }
            if(base == 0){
                base = c;
                continue;
            }
            if(c != base){
                return false;
            }
        }
        
        return true;
    }
}