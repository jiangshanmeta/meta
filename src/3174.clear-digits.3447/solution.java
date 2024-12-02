class Solution {
    public String clearDigits(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        char[] chars = s.toCharArray();
        for(char c : chars){
            if(Character.isDigit(c)){
                if(!stack.isEmpty() && !Character.isDigit(stack.peekLast())   ){
                    stack.pollLast();
                }else{
                    stack.addLast(c);
                }

            }else{
                stack.addLast(c);
            }
        }

        return stack.stream().map(String::valueOf).collect(Collectors.joining(""));

    }
}