class Solution {
    public boolean reportSpam(String[] message, String[] bannedWords) {
        Set<String> set = new HashSet<>(List.of(bannedWords));
        int count = 0;
        for (String s : message) {
            if (set.contains(s)) {
                count++;
                if (count == 2) {
                    return true;
                }
            }
        }
        return false;
    }
}