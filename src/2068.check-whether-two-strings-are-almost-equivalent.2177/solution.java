class Solution {
    public boolean checkAlmostEquivalent(String word1, String word2) {
        int[] counts = new int[26];
        for(char c : word1.toCharArray()){
            counts[c-'a']--;
        }
        for(char c : word2.toCharArray()){
            counts[c-'a']++;
            if(counts[c-'a']>3){
                return false;
            }
        }
        for(int c : counts){
            if(c<-3 || c>3){
                return false;
            }
        }
        return true;
    }
}