class Solution {
    public boolean hasSameDigits(String s) {
        char[] chars = s.toCharArray();
        int[] ints = new int[chars.length];
        for(int i=0;i< chars.length;i++){
            ints[i] = chars[i]-'0';
        }
        int L = chars.length;
        while (L>2){
            L--;
            for(int i=0;i<L;i++){
                ints[i] = (ints[i]+ints[i+1])%10;
            }
        }
        return ints[0] == ints[1];
    }
}