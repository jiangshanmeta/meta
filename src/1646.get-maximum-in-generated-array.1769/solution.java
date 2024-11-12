class Solution {
    public int getMaximumGenerated(int n) {
        if(n == 0){
            return 0;
        }
        int[] result = new int[n+1];
        result[0] = 0;
        result[1] = 1;
        int max = 1;
        for(int i=2;i<result.length;i++){
            int H = i>>1;
            result[i] = result[H];
            if(i%2 != 0){
                result[i] += result[H+1];
            }
            max = Math.max(result[i],max);
        }
        return max;
    }
}