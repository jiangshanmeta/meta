class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        int i1 = 0;
        int j1 = 0;
        int i2 = 0;
        int j2 = 0;
        while (i1 < word1.length && i2 < word2.length) {
            boolean flag = false;
            if (j1 == word1[i1].length()) {
                i1++;
                j1 = 0;
                flag = true;
            }
            if (j2 == word2[i2].length()) {
                i2++;
                j2 = 0;
                flag = true;
            }
            if (flag) {
                continue;
            }

            if (word1[i1].charAt(j1) != word2[i2].charAt(j2)) {
                return false;
            }
            j1++;
            j2++;
        }
        return i1 == word1.length && j1 == 0 && i2 == word2.length && j2 == 0;
    }
}