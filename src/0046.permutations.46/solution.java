class Solution {
    public List<List<Integer>> permute(int[] nums) {
        boolean[] used = new boolean[nums.length];
        List<List<Integer>> result = new ArrayList<>();
        backTracking(nums,used,new ArrayList<>(),result);
        return result;
    }

    private void backTracking(int[] nums,boolean[] used,List<Integer> accumulate,List<List<Integer>> result){

        if(accumulate.size() == nums.length){
            result.add(new ArrayList<>(accumulate));
            return;
        }

        for(int i=0;i<nums.length;i++){
            if(used[i]){
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