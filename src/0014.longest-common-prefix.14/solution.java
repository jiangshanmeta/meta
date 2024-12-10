class Solution {
    public String longestCommonPrefix(String[] strs) {
        char[] chars = strs[0].toCharArray();
        for(int j=0;j< chars.length;j++){
            char c = chars[j];
            for(int i=1;i<strs.length;i++){
                if(j == strs[i].length()){
                    return strs[0].substring(0,j);
                }
                if(strs[i].charAt(j) != c){
                    return strs[0].substring(0,j);
                }
            }
        }


        return strs[0];
    }
}