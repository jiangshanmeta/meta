class Solution {
    public String removeDuplicates(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        char[] chars = s.toCharArray();
        for (char aChar : chars) {
            if (!stack.isEmpty() && stack.peekLast().equals(aChar)) {
                stack.removeLast();
            } else {
                stack.addLast(aChar);
            }

        }
        return stack.stream().map(String::valueOf).collect(Collectors.joining(""));
    }
}