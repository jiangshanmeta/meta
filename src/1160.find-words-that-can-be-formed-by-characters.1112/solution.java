class Solution {
    public int countCharacters(String[] words, String chars) {
        int[] dicCounts = toCount(chars);
        int result = 0;
        for(String s : words){
            if(match(dicCounts,toCount(s))){
                result += s.length();
            }
        }
        return result;
    }

    private boolean match(int[] dic,int[] word){
        for(int i=0;i<26;i++){
            if(dic[i]<word[i]){
                return false;
            }
        }
        return true;
    }

    private int[] toCount(String s){
        int[] result = new int[26];
        for(char c:s.toCharArray()){
            result[c-'a']++;
        }
        return result;
    }
}