class Solution {
    public String freqAlphabets(String s) {
        StringBuilder stringBuilder = new StringBuilder();
        int index = 0;
        while (index < s.length()) {
            if (index + 2 < s.length() && s.charAt(index + 2) == '#') {
                stringBuilder.append((char) (Integer.parseInt(s.substring(index, index + 2)) + 96));
                index += 3;
            } else {
                stringBuilder.append((char) (48 + s.charAt(index)));
                index++;
            }

        }
        return stringBuilder.toString();
    }
}