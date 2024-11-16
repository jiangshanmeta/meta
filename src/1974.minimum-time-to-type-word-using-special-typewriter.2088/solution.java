class Solution {
    public int minTimeToType(String word) {
        char last = 'a';
        char[] chars = word.toCharArray();
        int result = 0;
        for(char c : chars){
            int diff = Math.abs(c-last);
            result += Math.min(diff,26-diff);
            last = c;
        }
        return result+chars.length;
    }
}