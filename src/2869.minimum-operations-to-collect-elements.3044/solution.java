class Solution {
    public int minOperations(List<Integer> nums, int k) {
        Set<Integer> set = new HashSet<>();
        int index = nums.size()-1;
        while (index>-1 && set.size()<k){
            int item = nums.get(index--);
            if(item<=k){
                set.add(item);
                if(set.size() == k){
                    break;
                }
            }
        }
        return nums.size()-index-1;
    }
}