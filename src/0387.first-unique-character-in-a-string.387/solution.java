class Solution {
    public int firstUniqChar(String s) {
        char[] chars = s.toCharArray();
        int[] counts = new int[26];
        for(char c:chars){
            counts[c-'a']++;
        }
        for(int i=0;i<chars.length;i++){
            if(counts[chars[i]-'a'] == 1){
                return i;
            }
        }
        return -1;
    }
}