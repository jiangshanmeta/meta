class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        boolean[] exists = new boolean[52];
        for(char c : jewels.toCharArray()){
            if(c>'Z'){
                exists[c-'a'] = true;
            }else{
                exists[c-'A'+26] = true;
            }
        }
        int cnt = 0;
        for(char c : stones.toCharArray()){
            if(c>'Z'){
                if(exists[c-'a']){
                    cnt++;
                }
            }else if(exists[c-'A'+26]){
                cnt++;
            }
        }
        return cnt;
    }
}