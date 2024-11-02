class Solution {
    public int arrangeCoins(int n) {
        long nl = (long)n * 2;
        long k = (long)Math.sqrt(nl)-1;

        if( (k+1)*(k+2) <=nl ){
            return (int)k + 1;
        }
        return (int)k;
    }
}