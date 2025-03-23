class Solution {
    public boolean isMonotonic(int[] nums) {
        if(nums.length<2){
            return true;
        }
        
        int delta = nums[nums.length-1]-nums[0];
        if(delta == 0){
            return checkSame(nums);
        }
        if(delta>0){
            return checkIncrease(nums);
        }
        
        return checkDecrease(nums);
    }
    
    private boolean checkSame(int[] nums){
        for(int n : nums){
            if(n != nums[0]){
                return false;
            }
        }
        return true;
    }
    
    private boolean checkIncrease(int[] nums){
        for(int i=1;i<nums.length;i++){
            if(nums[i]<nums[i-1]){
                return false;
            }
        }
        return true;
    }
    
    private boolean checkDecrease(int[] nums){
        for(int i=1;i< nums.length;i++){
            if(nums[i]>nums[i-1]){
                return false;
            }
        }
        return true;
    }
    
    
}