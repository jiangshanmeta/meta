class Solution {
    public String truncateSentence(String s, int k) {
        return Arrays.stream(s.split(" ")).limit(k).collect(Collectors.joining(" "));

    }
}