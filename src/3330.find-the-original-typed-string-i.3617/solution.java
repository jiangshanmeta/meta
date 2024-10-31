class Solution {
    public int possibleStringCount(String word) {
        int result = 1;
        char[] chars = word.toCharArray();
        int index = 0;
        while (index<chars.length){
            char c = chars[index++];
            int cnt = 0;
            while (index<chars.length && chars[index] == c){
                cnt++;
                index++;
            }
            result += cnt;
        }
        
        return result;
    }
}