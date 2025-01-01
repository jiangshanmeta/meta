class Solution {
    public boolean backspaceCompare(String s, String t) {
        return normalize(s).equals(normalize(t));

    }

    private String normalize(String s){
        Stack<String> stack = new Stack<>();
        for(char c : s.toCharArray()){
            if(c == '#'){
                if(!stack.isEmpty()){
                    stack.pop();
                }
                
            }else{
                stack.add(String.valueOf(c));
            }
        }
        return String.join("", stack);
    }

}