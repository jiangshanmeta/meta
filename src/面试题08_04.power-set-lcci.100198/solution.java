class Solution {
    List<List<Integer>> result = new ArrayList<>();
    int[] nums;
    public List<List<Integer>> subsets(int[] nums) {
        this.nums = nums;
        backTracking(0,new ArrayList<>());
        return result;
    }

    private void backTracking(int index,List<Integer> accumulate){
        if(index == nums.length){
            result.add(new ArrayList<>(accumulate));
            return;
        }
        
        backTracking(index+1,accumulate);
        
        accumulate.add(nums[index]);
        backTracking(index+1,accumulate);
        accumulate.removeLast();
        
    }
}