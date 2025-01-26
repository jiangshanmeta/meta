class Solution {
    private final List<List<Integer>> result = new ArrayList<>();
    int[] nums;
    List<Integer> accumulate = new ArrayList<>();
    public List<List<Integer>> subsets(int[] nums) {
        this.nums = nums;
        backTracking(0);
        return result;
    }
    
    private void backTracking(int index){
        if(index == nums.length){
            result.add(new ArrayList<>(accumulate));
            return;
        }
        
        backTracking(index+1);
        
        accumulate.add(nums[index]);
        backTracking(index+1);
        accumulate.removeLast();
        
    }
    
    
}