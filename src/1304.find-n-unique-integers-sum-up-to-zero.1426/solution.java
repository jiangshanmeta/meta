class Solution {
    public int[] sumZero(int n) {
        int[] result = new int[n];
        for(int i=0;i<n/2;i++){
            result[2*i] = i+1;
            result[2*i+1] = -(i+1);
        }
        return result;
    }
}