class Solution {
    public int arraySign(int[] nums) {
        int flag = 1;
        for (int i : nums) {
            if (i == 0) {
                return 0;
            }
            if (i < 0) {
                flag = -flag;
            }
        }
        return flag;
    }
}