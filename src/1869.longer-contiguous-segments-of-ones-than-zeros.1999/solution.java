class Solution {
    public boolean checkZeroOnes(String s) {
        int max1 = 0;
        int max0 = 0;
        int index = 0;
        char[] chars = s.toCharArray();
        while (index<chars.length){
            char c = chars[index++];
            int count = 1;
            while(index<chars.length && chars[index] == c){
                index++;
                count++;
            }
            if(c == '1'){
                max1 = Math.max(max1,count);
            }else{
                max0 = Math.max(max0,count);
            }
            
        }
        
        return max1>max0;
    }
}