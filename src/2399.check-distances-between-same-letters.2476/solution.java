class Solution {
    public boolean checkDistances(String s, int[] distance) {
        int[] firstIndexes = new int[26];
        char[] chars = s.toCharArray();
        for(int i=0;i<s.length();i++){
            
            int offset = chars[i]-'a';
            if(firstIndexes[offset] == 0){
                firstIndexes[offset] = i+1;
            }else if(distance[offset] != i-firstIndexes[offset]){
                return false;
            }
        }
        return true;
    }
}