class Solution {
    public int countElements(int[] nums) {
        int min = nums[0];
        int max = nums[0];
        for(int i=1;i<nums.length;i++){
            min = Math.min(min,nums[i]);
            max = Math.max(max,nums[i]);
        }
        int cnt = 0;
        for(int n : nums){
            if(n != min && n != max){
                cnt++;
            }
        }
        return cnt;
    }
}