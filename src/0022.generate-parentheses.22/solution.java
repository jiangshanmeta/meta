class Solution {
    private final List<String> result = new ArrayList<>();
    private final StringBuilder stringBuilder = new StringBuilder();
    public List<String> generateParenthesis(int n) {
        backTracking(n,n);
        return result;
    }
    
    private void backTracking(int left,int right){
        if(left == 0 && right == 0){
            result.add(stringBuilder.toString());
            return;
        }
        
        if(left>0){
            stringBuilder.append('(');
            backTracking(left-1,right);
            stringBuilder.deleteCharAt(stringBuilder.length()-1);
        }
        
        if(right>left){
            stringBuilder.append(')');
            backTracking(left,right-1);
            stringBuilder.deleteCharAt(stringBuilder.length()-1);
        }
        
    }
}