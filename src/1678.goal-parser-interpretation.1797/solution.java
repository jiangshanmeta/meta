class Solution {
    public String interpret(String command) {
        StringBuilder stringBuilder = new StringBuilder();
        int index = 0;
        while (index < command.length()) {
            if (command.charAt(index) == 'G') {
                stringBuilder.append('G');
                index++;
            } else if (command.charAt(index + 1) == ')') {
                stringBuilder.append('o');
                index += 2;
            } else {
                stringBuilder.append("al");
                index += 4;
            }
        }
        return stringBuilder.toString();
    }
}