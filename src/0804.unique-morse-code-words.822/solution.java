class Solution {
    public int uniqueMorseRepresentations(String[] words) {
        String[] configs = new String[]{".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
    
        return (int)Arrays.stream(words).map((s)->{
            StringBuilder stringBuilder = new StringBuilder();
            for(char c : s.toCharArray()){
                stringBuilder.append(configs[c-'a']);
            }
            return stringBuilder.toString();
        }).distinct().count();
    
    }
}