class Solution {
    public int bitwiseComplement(int n) {
        char[] chars = Integer.toBinaryString(n).toCharArray();
        int result = 0;
        for(char c : chars){
            result = result*2 + ( (c-'0')^1);
        }

        return result;
    }
}