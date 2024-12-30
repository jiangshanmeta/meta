class Solution {
    public boolean hasAlternatingBits(int n) {
        int last = n&1;
        n >>= 1;
        while (n>0){
            int digit = n&1;
            if(digit == last){
                return false;
            }
            last = digit;
            n>>=1;
        }
        return true;
    }
}