class Solution {
    public int findComplement(int num) {
        char[] chars = Integer.toBinaryString(num).toCharArray();
        int result = 0;
        for(char c : chars){
            result = result*2 + ( (c-'0')^1);
        }

        return result;
    }
}