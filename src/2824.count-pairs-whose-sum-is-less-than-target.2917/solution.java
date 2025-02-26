class Solution {
    public int countPairs(List<Integer> nums, int target) {
        Collections.sort(nums);
        int result = 0;
        int left = 0;
        int right = nums.size()-1;
        while(left<right){
            while (left<right && nums.get(left)+nums.get(right)>=target){
                right--;
            }
            result += right-left;
            left++;
        }
        return result;
    }
}