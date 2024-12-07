class Solution {
    public boolean isBalanced(String num) {
        int diff = 0;
        char[] chars = num.toCharArray();
        for(int i=0;i<chars.length;i++){
            int d = chars[i]-'0';
            if(i%2 == 0){
                diff += d;
            }else{
                diff -= d;
            }
        }
        return diff == 0;
    }
}