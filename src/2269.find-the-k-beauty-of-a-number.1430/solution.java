class Solution {
    public int divisorSubstrings(int num, int k) {
        String s = String.valueOf(num);
        int count = 0;
        for(int i=0;i+k-1<s.length();i++){
            int div = Integer.parseInt(s.substring(i,i+k));
            if(div == 0 || num%div != 0){
                continue;
            }
            count++;
        }
        
        return count;
    }
}