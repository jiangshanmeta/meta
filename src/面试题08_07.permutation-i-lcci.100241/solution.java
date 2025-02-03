class Solution {
    char[] chars;
    boolean[] used;
    List<String> result = new ArrayList<>();
    public String[] permutation(String S) {
        chars = S.toCharArray();
        used = new boolean[chars.length];
        
        backTracing(new StringBuilder());
        
        return result.toArray(new String[0]);
    }
    
    
    private void backTracing(StringBuilder stringBuilder){
        if(stringBuilder.length() == chars.length){
            result.add(stringBuilder.toString());

            return;
        }
        
        for(int i=0;i< chars.length;i++){
            if(used[i]){
                continue;
            }
            used[i] = true;
            stringBuilder.append(chars[i]);
            backTracing(stringBuilder);
            stringBuilder.deleteCharAt(stringBuilder.length()-1);
            used[i] = false;
        }
        
        
        
        
    }
}