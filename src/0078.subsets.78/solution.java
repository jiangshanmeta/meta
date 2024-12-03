class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backTracking(nums,0,new ArrayList<>(),result);
        return result;
    }
    
    private void backTracking(int[] nums,int index,List<Integer> accumulate, List<List<Integer>> result){
        if(index == nums.length){
            result.add(new ArrayList<>(accumulate));
            return;
        }
        backTracking(nums,index+1,accumulate,result);
        
        accumulate.addLast(nums[index]);
        backTracking(nums,index+1,accumulate,result);
        accumulate.removeLast();
    }
    
}