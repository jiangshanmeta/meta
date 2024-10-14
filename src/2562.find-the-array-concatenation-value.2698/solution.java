class Solution {
    public long findTheArrayConcVal(int[] nums) {
        long result = 0;
        StringBuilder sb = new StringBuilder();
        int left = 0;
        int right = nums.length - 1;
        while (left < right) {
            sb.append(nums[left]);
            sb.append(nums[right]);

            result += Long.parseLong(sb.toString());
            sb.delete(0, sb.length());

            left++;
            right--;
        }

        if (left == right) {
            result += nums[left];
        }

        return result;
    }
}