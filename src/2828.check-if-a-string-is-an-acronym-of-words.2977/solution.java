class Solution {
    public boolean isAcronym(List<String> words, String s) {
        if (s.length() != words.size()) {
            return false;
        }
        int index = 0;
        while (index < s.length()) {
            if (s.charAt(index) != words.get(index).charAt(0)) {
                return false;
            }
            index++;
        }

        return true;
    }
}