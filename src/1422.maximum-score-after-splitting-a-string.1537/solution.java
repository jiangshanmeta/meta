class Solution {
    public int maxScore(String s) {
        char[] chars = s.toCharArray();
        int[] count1s = new int[s.length()];
        int result = 0;
        int one = 0;
        for(int i=chars.length-1;i>0;i--){
            if(chars[i] == '1'){
                one++;
            }
            count1s[i] = one;
        }
        int zero = 0;
        for(int i=0;i<chars.length-1;i++){
            if(chars[i] == '0'){
                zero++;
            }
            result = Math.max(result,count1s[i+1]+zero);
        }

        return result;
    }
}