class Solution {
    public int mySqrt(int x) {
        if(x == 0 || x == 1){
            return x;
        }
        int result = 1;
        int low = 1;
        int high = x/2;
        while (low<=high){
            int mid = low + (high-low)/2;
            long cc = (long)mid*mid;
            if(cc>x){
                high = mid-1;
            }else {
                result = mid;
                low = mid+1;
            }
        }
        return result;
    }
}