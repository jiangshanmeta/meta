class Solution {
    public int binaryGap(int n) {
        int result = 0;
        char[] chars = Integer.toBinaryString(n).toCharArray();
        int last = 0;
        for (int i = 1; i < chars.length; i++) {
            if (chars[i] == '1') {
                result = Math.max(result, i - last);
                last = i;
            }
        }
        return result;
    }
}