class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder stringBuilder = new StringBuilder();
        int index = 0;

        while (index < word1.length() && index < word2.length()) {
            stringBuilder.append(word1.charAt(index));
            stringBuilder.append(word2.charAt(index));
            index++;
        }

        if (index < word1.length()) {
            stringBuilder.append(word1.substring(index));
        }
        if (index < word2.length()) {
            stringBuilder.append(word2.substring(index));
        }

        return stringBuilder.toString();
    }
}