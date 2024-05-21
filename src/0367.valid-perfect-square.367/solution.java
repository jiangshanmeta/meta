class Solution {
    public boolean isPerfectSquare(int num) {
        int low = 1;
        int high = num;

        while (low <= high) {
            int mid = low + ((high - low) >> 1);
            long pow = (long) mid * mid;
            if (pow > num) {
                high = mid - 1;
            } else if (pow < num) {
                low = mid + 1;
            } else {
                return true;
            }
        }
        return false;
    }
}