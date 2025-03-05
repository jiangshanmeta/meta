class Solution {
    public int countKeyChanges(String s) {
        char[] chars = s.toLowerCase().toCharArray();
        int result = 0;
        for(int i=1;i<chars.length;i++){
            if(chars[i] != chars[i-1]){
                result++;
            }
        }
        return result;
    }
}