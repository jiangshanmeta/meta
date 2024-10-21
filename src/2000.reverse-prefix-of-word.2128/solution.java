class Solution {
    public String reversePrefix(String word, char ch) {
        int r = word.indexOf(ch);
        int l = 0;
        char[] chars = word.toCharArray();
        while (l<r){
            char tmp = chars[l];
            chars[l++] = chars[r];
            chars[r--] = tmp;
        }
        return String.valueOf(chars);
    }
}