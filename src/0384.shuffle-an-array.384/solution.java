class Solution {
    private int[] nums;
    
    public Solution(int[] nums) {
        this.nums = nums;

    }

    public int[] reset() {
        return this.nums;
    }

    public int[] shuffle() {
        List<Integer> list = new ArrayList<>();
        for(int n:nums){
            list.add(n);
        }
        Collections.shuffle(list);
        int[] result = new int[nums.length];
        for(int i=0;i< result.length;i++){
            result[i] = list.get(i);
        }
        return result;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */