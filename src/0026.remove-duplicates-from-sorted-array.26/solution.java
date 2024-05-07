class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int k = 0;
        int i = 1;
        while (i < nums.length) {
            if (nums[i] == nums[k]) {
                i++;
            } else {
                nums[++k] = nums[i++];
            }

        }

        return k + 1;
    }
}