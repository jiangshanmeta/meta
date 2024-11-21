class Solution {
    public int closetTarget(String[] words, String target, int startIndex) {
        int result = words.length;
        for(int i=0;i< words.length;i++){
            if(!words[i].equals(target)){
                continue;
            }
            int diff = Math.abs(startIndex-i);
            result = Math.min(result, Math.min(diff, words.length-diff) );
        }
        return result == words.length?-1:result;
    }
}