class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        backTracking(nums,new boolean[nums.length],new ArrayList<>(),result );
        return result;
    }
    
    private void backTracking(int[] nums,boolean[] used,List<Integer> accumulate,List<List<Integer>> result){
        if(accumulate.size() == nums.length){
            result.add(new ArrayList<>(accumulate));
            return;
        }
        
        for(int i=0;i<nums.length;i++){
            if(used[i] || (i>0 && nums[i] == nums[i-1] && !used[i-1])){
                continue;
            }
            used[i] = true;
            accumulate.addLast(nums[i]);
            backTracking(nums,used,accumulate,result);
            accumulate.removeLast();
            used[i] = false;
        }
        
        
    }
    
}