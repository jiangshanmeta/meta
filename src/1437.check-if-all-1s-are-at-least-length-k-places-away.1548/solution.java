class Solution {
    public boolean kLengthApart(int[] nums, int k) {
        int lastIndex = 0;
        for(int i=0;i<nums.length;i++){
            if(nums[i] == 1){
                lastIndex = i;
                break;
            }
        }
        int index = lastIndex+1;
        while (index<nums.length){
            if(nums[index] == 0){
                index++;
                continue;
            }
            if(index-lastIndex-1<k){
                return false;
            }
            lastIndex = index;
            index++;
        }
        return true;
    }
}