class Solution {
    public int scoreOfString(String s) {
        char[] chars = s.toCharArray();
        int result = 0;
        for(int i=0;i<chars.length-1;i++){
            result += Math.abs(chars[i]-chars[i+1]);
        }
        return result;
    }
}