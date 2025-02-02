class Solution {
    public boolean canPermutePalindrome(String s) {
        Map<Character,Integer> map = new HashMap<>();
        char[] chars = s.toCharArray();
        for(char c:chars){
            map.merge(c,1, Integer::sum);
        }
        boolean hasOdd = false;
        for(int n:map.values()){
            if(n%2 == 1){
                if(hasOdd){
                    return false;
                }
                hasOdd = true;
            }
        }
        return true;
    }
}