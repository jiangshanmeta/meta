class Solution {
    public int minimumMoves(String s) {
        char[] chars = s.toCharArray();
        int result = 0;
        int index = 0;
        while (index<chars.length){
            if(chars[index] == 'X'){
                result++;
                index += 3;
            }else{
                index++;
            }
            
        }
        return result;
    }
}