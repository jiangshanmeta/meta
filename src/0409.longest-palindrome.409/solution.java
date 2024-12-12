class Solution {
    public int longestPalindrome(String s) {
        int[] counts = new int[52];
        for(char c : s.toCharArray() ){
            if(Character.isUpperCase(c)){
                counts[c-'A']++;
            }else{
                counts[c-'a'+26]++;
            }
        }
        boolean hasOdd = false;
        int result = 0;
        for(int count:counts){
            if(count%2 == 1){
                hasOdd = true;
                count--;
            }
            result += count;
        }
        return result + (hasOdd?1:0);
    }
}