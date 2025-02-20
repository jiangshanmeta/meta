class Solution {
    public int mostFrequent(int[] nums, int key) {
        int[] counts = new int[1001];
        int result = 0;
        int maxCount = 0;
        for(int i=0;i<nums.length-1;i++){
            if(nums[i] == key){
                int target = nums[i+1];
                counts[target]++;
                if(counts[target]>maxCount){
                    result = target;
                    maxCount = counts[target];
                }
            }
        }
        return result;
    }
}