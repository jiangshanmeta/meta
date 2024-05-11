import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> summaryRanges(int[] nums) {
        int i = 0;
        List<String> list = new ArrayList<>();
        while (i < nums.length) {
            int start = nums[i++];
            int end = start;
            while (i < nums.length) {
                if (nums[i] == nums[i - 1] + 1) {
                    end = nums[i++];
                } else {
                    break;
                }
            }
            if (start == end) {
                list.add(String.valueOf(start));
            } else {
                list.add(String.format("%d->%d", start, end));
            }
        }

        return list;
    }
}