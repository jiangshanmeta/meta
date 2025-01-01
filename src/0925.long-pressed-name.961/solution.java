class Solution {
    public boolean isLongPressedName(String name, String typed) {
        if(typed.length()<name.length()){
            return false;
        }
        char[] charsName = name.toCharArray();
        char[] charsTyped = typed.toCharArray();
        
        int indexN = 0;
        int indexT = 0;
        while(indexN<charsName.length && indexT<charsTyped.length){
            if(charsName[indexN] != charsTyped[indexT]){
                return false;
            }
            char c = charsName[indexN++];
            int count = 1;
            while(indexN<charsName.length && charsName[indexN] == c){
                indexN++;
                count++;
            }
            
            while(indexT<charsTyped.length && charsTyped[indexT] == c){
                count--;
                indexT++;
            }
            if(count>0){
                return false;
            }
            
            
        }
        
        return charsName.length == indexN && charsTyped.length == indexT;
    }
}