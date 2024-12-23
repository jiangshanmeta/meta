class Solution {
    public String reverseStr(String s, int k) {
        char[] chars = s.toCharArray();
        int index = 0;
        while (index< chars.length){
            reverse(chars,index,index+k-1);
            index += 2*k;
        }
        return String.valueOf(chars);
    }
    
    private void reverse(char[] chars,int left,int right){
        if(right>= chars.length){
            right = chars.length-1;
        }
        while (left<right){
            char tmp = chars[left];
            chars[left] =chars[right];
            chars[right] = tmp;
            left++;
            right--;
        }
    }
}