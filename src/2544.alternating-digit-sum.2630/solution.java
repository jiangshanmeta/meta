class Solution {
    public int alternateDigitSum(int n) {
        int sign = String.valueOf(n).length()%2 == 1?1:-1;
        int result = 0;
        while( n != 0){
            result += sign*(n%10);
            n /= 10;
            sign *= -1;
        }
        return result;
    }
}