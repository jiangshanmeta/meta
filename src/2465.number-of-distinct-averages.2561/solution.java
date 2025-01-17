class Solution {
    public int distinctAverages(int[] nums) {
        Set<Double> set = new HashSet<>();
        Arrays.sort(nums);
        int l = 0;
        int r = nums.length-1;
        while (l<r){
            set.add( (nums[l++]+nums[r--])/2.0 );
        }
        return set.size();
    }
}