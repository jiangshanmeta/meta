class Solution {
    public boolean CheckPermutation(String s1, String s2) {
        if(s1.length() != s2.length()){
            return false;
        }
        int[] counts = new int[26];
        for(char c : s1.toCharArray()){
            counts[c-'a']++;
        }
        for(char c : s2.toCharArray()){
            int i = c-'a';
            if(counts[i] == 0){
                return false;
            }
            counts[i]--;
        }
        return true;
    }
}