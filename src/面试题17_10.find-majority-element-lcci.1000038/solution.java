class Solution {
    public int majorityElement(int[] nums) {
        int count = 1;
        int element = nums[0];
        for(int i=1;i<nums.length;i++){
            if(nums[i] == element){
                count++;
            }else if(count>0){
                count--;
            }else{
                count = 1;
                element = nums[i];
            }
        }

        count = 0;
        for(int n:nums){
            if(n == element){
                count++;
            }
        }
        if(count>nums.length/2){
            return element;
        }

        return -1;
    }
}