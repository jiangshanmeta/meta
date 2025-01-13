class Solution {
    public int countEven(int num) {
        int count = 0;
        while (num>0){
            if(match(num)){
                count++;
            }
            num--;
        }
        return count;
    }

    private boolean match(int num){
        int sum = 0;
        while (num != 0){
            sum += num%10;
            num /= 10;
        }
        return sum%2 == 0;
    }
}