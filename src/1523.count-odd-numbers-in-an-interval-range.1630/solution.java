class Solution {
    public int countOdds(int low, int high) {
        if(low == high){
            return low%2;
        }
        int result = 0;
        if(low%2 == 1){
            result++;
            low++;
        }
        if(high%2 == 1){
            result++;
            high--;
        }

        if(low<high){
            result += (high-low)>>1;
        }
        return result;
    }
}