class Solution {
    public int maximumNumberOfStringPairs(String[] words) {
        Set<String> set = new HashSet<>();
        int result = 0;
        for (String s : words) {
            char[] chars = s.toCharArray();
            char[] reverse = new char[chars.length];
            for (int i = 0; i < chars.length; i++) {
                reverse[chars.length - i - 1] = chars[i];
            }
            String s2 = String.valueOf(reverse);
            if (set.contains(s2)) {
                result++;
            }
            set.add(s);
        }
        return result;
    }
}