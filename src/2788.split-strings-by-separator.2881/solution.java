class Solution {
    public List<String> splitWordsBySeparator(List<String> words, char separator) {
        List<String> result = new ArrayList<>();
        for (String word : words) {
            int start = 0;
            int end = 0;
            while (end < word.length()) {
                while (end < word.length() && word.charAt(end) != separator) {
                    end++;
                }
                if (start < end) {
                    result.add(word.substring(start, end));
                }
                end++;
                start = end;
            }
        }
        return result;
    }
}