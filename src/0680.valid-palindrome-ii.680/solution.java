class Solution {
    public boolean validPalindrome(String s) {
    return check(s,0,s.length()-1,false);
    }
    
    private boolean check(String s, int left,int right,boolean changed){
        while (left<right){
            if(s.charAt(left) != s.charAt(right)){
                if(changed){
                    return false;
                }
                return check(s,left+1,right,true) || check(s,left,right-1,true);
            }
            left++;
            right--;
        }
        return true;
    }
    
}