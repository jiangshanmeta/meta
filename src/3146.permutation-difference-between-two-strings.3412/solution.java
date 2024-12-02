class Solution {
    public int findPermutationDifference(String s, String t) {
        int[] positions = new int[26];
        char[] charsS = s.toCharArray();
        for(int i=0;i<charsS.length;i++){
            positions[charsS[i]-'a'] = i;
        }
        int result = 0;
        char[] charsT = t.toCharArray();
        for(int i=0;i<charsT.length;i++){
            result += Math.abs(i-positions[charsT[i]-'a']  );
        }
        return result;
    }
}