class Solution {
    public int maxLengthBetweenEqualCharacters(String s) {
        int[] firstIndexs = new int[26];
        char[] chars = s.toCharArray();
        int result = -1;
        for(int i=0;i<chars.length;i++){
            int offset = chars[i]-'a';
            if(firstIndexs[offset] == 0){
                firstIndexs[offset] = i+1;
            }else{
                result = Math.max(result,i-firstIndexs[offset]);
            }
            
        }
        return result;
    }
}