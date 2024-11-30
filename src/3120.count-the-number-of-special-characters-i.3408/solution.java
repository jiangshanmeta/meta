class Solution {
    public int numberOfSpecialChars(String word) {
        char[] chars = word.toCharArray();
        boolean[] exists = new boolean[52];
        for(char c : chars){
            if(c<='Z'){
                exists[c-'A'] = true;
            }else{
                exists[c-'a'+26] = true;
            }
        }
        int cnt = 0;
        for(int i=0;i<26;i++){
            if(exists[i] && exists[i+26]){
                cnt++;
            }
        }
        return cnt;
    }
}