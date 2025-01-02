class Solution {
    public String gcdOfStrings(String str1, String str2) {
        for(int i=Math.min(str1.length(),str2.length())-1;i>-1;i--){
            int L = i+1;
            if(str1.length()%L != 0 || str2.length()%L != 0){
                continue;
            }
            if( str1.charAt(i) != str2.charAt(i) ){
                return "";
            }

            String sub = str1.substring(0,i+1);
            if(sub.repeat(str1.length()/L).equals(str1) && sub.repeat(str2.length()/L).equals(str2)  ){
                return sub;
            }

        }

        return "";
    }
}