class Solution {
    public int maximumCount(int[] nums) {
        int firstPostiveIndex = nums.length;
        int lastNegativeIndex = -1;

        int l = 0;
        int h = nums.length - 1;
        while (l <= h) {
            int mid = (l + h) >> 1;
            if (nums[mid] > 0) {
                firstPostiveIndex = mid;
                h = mid - 1;
            } else {
                if (nums[mid] < 0) {
                    lastNegativeIndex = mid;
                }
                l = mid + 1;
            }
        }
        l = lastNegativeIndex + 1;
        while (l <= h) {
            int mid = (l + h) >> 1;
            if (nums[mid] < 0) {
                lastNegativeIndex = mid;
                l = mid + 1;
            } else {
                h = mid - 1;
            }
        }

        return Math.max(lastNegativeIndex + 1, nums.length - firstPostiveIndex);
    }
}