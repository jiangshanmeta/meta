class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
        Arrays.sort(nums);
        int low = 0;
        int high = nums.length-1;
        while (low<=high){
            int mid = (low+high)>>1;
            if(nums[mid]<target){
                low = mid+1;
            }else if(nums[mid]>target){
                high = mid-1;
            }else{
                int low1 = low;
                int high1 = mid;
                int start = mid;
                while (low1<=high1){
                    int mid1 = (low1+high1)>>1;
                    if(nums[mid1] == target){
                        start = mid1;
                        high1 = mid1-1;
                    }else{
                        low1 = mid1+1;
                    }
                }
                
                int low2 = mid;
                int high2 = high;
                int end = mid;
                while (low2<=high2){
                    int mid2 = (low2+high2)>>1;
                    if(nums[mid2] == target){
                        end = mid2;
                        low2 = mid2+1;
                    }else {
                        high2 = mid2-1;
                    }
                    
                }
                
                return IntStream.rangeClosed(start,end).boxed().toList();
                
            }
        }
        
        
        return List.of();
    }
}