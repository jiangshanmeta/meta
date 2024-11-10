class Solution {
    public int maxPower(String s) {
        int result = 0;
        char[] chars = s.toCharArray();
        int index = 0;
        while (index<chars.length){
            char c = chars[index++];
            int cnt = 1;
            while (index<chars.length && chars[index] == c){
                index++;
                cnt++;
            }
            result = Math.max(result,cnt);
        }
        return result;
    }
}