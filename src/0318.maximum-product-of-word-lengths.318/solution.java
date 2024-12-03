class Solution {
    public int maxProduct(String[] words) {
        int[] masks = new int[words.length];
        for(int i=0;i< words.length;i++){
            masks[i] = mask(words[i]);
        }
        int result = 0;
        for(int i=0;i< words.length;i++){
            for(int j=i+1;j< words.length;j++){
                if( (masks[i]&masks[j]) == 0 ){
                    result = Math.max(words[i].length()*words[j].length(),result);
                }
            }
        }
        return result;
    }

    private int mask(String word){
        int result = 0;
        for(char c : word.toCharArray()){
            result |= (1<<( c-'a' ));
        }
        return result;
    }
}