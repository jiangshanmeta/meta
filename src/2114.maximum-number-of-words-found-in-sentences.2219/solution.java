class Solution {
    public int mostWordsFound(String[] sentences) {
        return Arrays.stream(sentences).mapToInt(s -> s.split(" ").length).max().getAsInt();

    }
}