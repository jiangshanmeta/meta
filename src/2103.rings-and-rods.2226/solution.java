class Solution {
    public int countPoints(String rings) {
        int[] rods = new int[10];
        for (int i = 0; i < rings.length(); i += 2) {
            int flag = 1;
            if (rings.charAt(i) == 'G') {
                flag = 2;
            } else if (rings.charAt(i) == 'B') {
                flag = 4;
            }

            rods[rings.charAt(i + 1) - '0'] |= flag;
        }
        int result = 0;
        for (int rod : rods) {
            if (rod == 7) {
                result++;
            }
        }
        return result;
    }
}