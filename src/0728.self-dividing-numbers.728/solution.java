class Solution {
    private boolean match(int n){
        int copy = n;
        while (copy>0){
            int digit = copy%10;
            if(digit == 0 || n%digit != 0){
                return false;
            }
            copy /= 10;
        }
        return true;
    }

    public List<Integer> selfDividingNumbers(int left, int right) {
        List<Integer> result = new ArrayList<>();
        while(left<=right){
            if(match(left)){
                result.add(left);
            }
            left++;
        }
        return result;
    }
}