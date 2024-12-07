class Solution {
    public int smallestNumber(int n, int t) {

        while (multi(n) % t != 0) {
            n++;
        }
        return n;
    }
    
    private int multi(int n){
        int result = 1;
        while (n != 0){
            result *= (n%10);
            n /= 10;
        }
        return result;
    }
}