class Solution {
    public boolean checkOnesSegment(String s) {
        boolean flag = false;
        int index = 0;
        char[] chars = s.toCharArray();
        while (index<chars.length){
            if(chars[index] == '0'){
                index++;
                continue;
            }
            if(flag){
                return false;
            }
            flag = true;
            while (index<chars.length && chars[index] == '1'){
                index++;
            }
        }
        return true;
    }
}