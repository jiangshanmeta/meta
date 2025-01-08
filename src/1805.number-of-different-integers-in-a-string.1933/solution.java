class Solution {
    public int numDifferentIntegers(String word) {
        word = word.replaceAll("\\D+", " ").trim();
        if(word.isEmpty()){
            return 0;
        }
        
        return (int) Arrays.stream(word.split("\\s+")).map(this::trimLeading0).distinct().count();
    }

    private String trimLeading0(String s){
        int index = 0;
        char[] chars = s.toCharArray();
        while (index<chars.length && chars[index] == '0'){
            index++;
        }
        if(index == chars.length){
            return "0";
        }
        return s.substring(index);
    }
}