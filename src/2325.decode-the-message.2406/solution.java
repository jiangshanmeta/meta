class Solution {
    public String decodeMessage(String key, String message) {
        boolean[] set = new boolean[26];
        char[] chars = new char[26];
        int index = 0;

        for(char c : key.toCharArray()){
            if(c == ' ' || set[c-'a']){
                continue;
            }
            set[c-'a'] = true;
            chars[c-'a'] = (char)(index+'a');
            index++;
        }

        char[] result = message.toCharArray();

        for(int i=0;i< result.length;i++){
            if(result[i] == ' '){
                continue;
            }
            result[i] = chars[result[i]-'a'];
        }

        return String.valueOf(result);
    }
}