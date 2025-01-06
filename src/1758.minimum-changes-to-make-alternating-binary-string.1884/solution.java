class Solution {
    public int minOperations(String s) {
        int count1 = 0;
        int current1 = 1;
        int count2 = 0;

        for(char c : s.toCharArray()){
            if(c-'0' != current1){
                count1++;
            }else{
                count2++;
            }
            current1 ^= 1;
        }
        return Math.min(count1,count2);
    }
}