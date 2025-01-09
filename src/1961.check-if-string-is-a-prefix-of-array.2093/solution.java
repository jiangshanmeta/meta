class Solution {
    public boolean isPrefixString(String s, String[] words) {
        char[] chars = s.toCharArray();
        int index = 0;
        for (String string : words) {
            if(index == chars.length){
                return true;
            }
            if (index + string.length() > chars.length) {
                return false;
            }
            char[] word = string.toCharArray();
            for (char c : word) {
                if (chars[index++] != c) {
                    return false;
                }
            }
        }
        return index == chars.length;
    }
}