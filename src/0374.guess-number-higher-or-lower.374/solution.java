/**
 * Forward declaration of guess API.
 * 
 * @param num your guess
 * @return -1 if num is higher than the picked number
 *         1 if num is lower than the picked number
 *         otherwise return 0
 *         int guess(int num);
 */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int low = 1;
        int high = n;
        int res = 0;

        while (low <= high) {
            int mid = low + ((high - low) >> 1);
            int compare = guess(mid);
            if (compare == -1) {
                high = mid - 1;
            } else if (compare == 1) {
                low = mid + 1;
            } else {
                res = mid;
                break;
            }

        }
        return res;
    }
}