class Solution {
    private final List<String> result = new ArrayList<>();
    private final StringBuilder sb = new StringBuilder();
    public List<String> generateParenthesis(int n) {
        backTracking(n,n);
        return result;
    }

    private void backTracking(int left, int right){
        if(left == 0 && right == 0){
            result.add(sb.toString());
            return;
        }
        
        if(left>0){
            sb.append('(');
            backTracking(left-1,right);
            sb.deleteCharAt(sb.length()-1);
        }
        
        if(right>left){
            sb.append(')');
            backTracking(left,right-1);
            sb.deleteCharAt(sb.length()-1);
        }
    }
}