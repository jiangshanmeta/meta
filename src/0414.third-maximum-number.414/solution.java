class Solution {
    public int thirdMax(int[] nums) {
        long a = Long.MIN_VALUE;
        long b = Long.MIN_VALUE;
        long c = Long.MIN_VALUE;
        for(long n : nums){
            if(n>a){
                c = b;
                b = a;
                a = n;
            }else if(n>b && n<a){
                c = b;
                b = n;
            }else if(n>c && n<b){
                c = n;
            }
        }
        return c == Long.MIN_VALUE? (int)a:(int)c;
    }
}