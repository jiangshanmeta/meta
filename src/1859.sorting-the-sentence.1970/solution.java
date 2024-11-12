class Solution {
    public String sortSentence(String s) {
        String[] sentences = s.split(" ");
        String[] sorted  = new String[sentences.length];
        for(String sentence : sentences){
            sorted[Integer.parseInt(sentence.substring(sentence.length()-1))-1] = sentence.substring(0, sentence.length()-1);
        }
        return String.join(" ",sorted);
    }
}