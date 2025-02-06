class Solution {
    private List<List<Integer>> result = new ArrayList<>();
    boolean[] used;
    private List<Integer> acc = new ArrayList<>();
    int[] nums;
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        used = new boolean[nums.length];
        this.nums = nums;
        backTracking(0);
        return result;
    }

    private void backTracking(int index){
        if(index == used.length){
            result.add(new ArrayList<>(acc));
            return;
        }

        backTracking(index+1);
        
        if(index>0 && nums[index-1] == nums[index]  && !used[index-1]){
            return;
        }


        acc.add(nums[index]);
        used[index] = true;
        backTracking(index+1);
        used[index] = false;
        acc.removeLast();
        
    }

}