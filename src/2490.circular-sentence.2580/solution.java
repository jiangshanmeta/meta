class Solution {
    public boolean isCircularSentence(String sentence) {
        String[] strings = sentence.split(" ");

        for(int i=0;i< strings.length;i++){
            String current = strings[i];
            String next = strings[(i+1)%strings.length];
            if(next.charAt(0) != current.charAt(current.length()-1)){
                return false;
            }
        }
        return true;
    }
}