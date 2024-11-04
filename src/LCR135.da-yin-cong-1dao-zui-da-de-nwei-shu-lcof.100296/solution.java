class Solution {
    public int[] countNumbers(int cnt) {
        int[] result = new int[(int) Math.pow(10,cnt)-1];
        for(int i=0;i<result.length;i++){
            result[i] = i+1;
        }
        return result;
    }
}