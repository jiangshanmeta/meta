class Solution {
    public String addBinary(String a, String b) {
        char[] chars1 = a.toCharArray();
        char[] chars2 = b.toCharArray();
        
        char[] chars3 = new char[Math.max(chars1.length,chars2.length)];
        int index1 = chars1.length-1;
        int index2 = chars2.length-1;
        int index3 = chars3.length-1;
        int addon = 0;
        while (index1>-1 && index2>-1){
            int sum = addon + (chars1[index1--]-'0') + (chars2[index2--]-'0');
            chars3[index3--] = sum%2 == 1?'1':'0';
            addon = sum/2;
        }
        while (index1>-1){
            int sum = addon + (chars1[index1--]-'0');
            chars3[index3--] = sum%2 == 1?'1':'0';
            addon = sum/2;
        }

        while (index2>-1){
            int sum = addon + (chars2[index2--]-'0');
            chars3[index3--] = sum%2 == 1?'1':'0';
            addon = sum/2;
        }
        
        String s = String.valueOf(chars3);
        if(addon == 0){
            return s;
        }
        
        return "1"+s;
    }
}