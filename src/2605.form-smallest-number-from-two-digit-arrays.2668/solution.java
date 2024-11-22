class Solution {
    public int minNumber(int[] nums1, int[] nums2) {
        boolean[] exists1 = normalize(nums1);
        boolean[] exists2 = normalize(nums2);
        for(int i=1;i<10;i++){
            if(exists1[i] && exists2[i]){
                return i;
            }
        }
        int min1 = getMin(exists1);
        int min2 = getMin(exists2);
        if(min1<min2){
            return min1*10+min2;
        }
        
        return min2*10+min1;
    }
    
    private int getMin(boolean[] exists){
        int result = 0;
        for(int i=0;i< exists.length;i++){
            if(exists[i]){
                result = i;
                break;
            }
        }
        return result;
    }
    
    private boolean[] normalize(int[] nums){
        boolean[] result = new boolean[10];
        for(int n:nums){
            result[n] = true;
        }
        return result;
    }
}