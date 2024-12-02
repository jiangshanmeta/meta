class Solution {
    public int minimumChairs(String s) {
        int count = 0;
        int result = 0;
        char[] chars = s.toCharArray();
        for(char c : chars){
            if(c == 'E'){
                count--;
                result = Math.min(result,count);
            }else{
                count++;
            }
        }
        return -result;
    }
}