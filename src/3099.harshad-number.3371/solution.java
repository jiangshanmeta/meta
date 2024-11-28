class Solution {
    public int sumOfTheDigitsOfHarshadNumber(int x) {
        int n = harshad(x);
        if(x%n == 0){
            return n;
        }
        return -1;
    }

    private int harshad(int x){
        int sum = 0;
        while (x != 0){
            sum += x%10;
            x /= 10;
        }
        return sum;
    }
}