class Solution {
    public int rearrangeCharacters(String s, String target) {
        int[] count1 = toCount(s);
        int[] count2 = toCount(target);
        int result = Integer.MAX_VALUE;
        for(int i=0;i<26;i++){
            if(count2[i] == 0){
                continue;
            }
            result = Math.min(result, count1[i]/count2[i] );

        }
        return result;
    }

    private int[] toCount(String s){
        int[] result = new int[26];
        for(char c:s.toCharArray()){
            result[c-'a']++;
        }
        return result;
    }
}