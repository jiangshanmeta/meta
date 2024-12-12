class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        boolean[] exists = new boolean[1001];
        for(int n:nums1){
            exists[n] = true;
        }
        int[] result = new int[1001];
        int index = 0;
        for(int n:nums2){
            if(exists[n]){
                exists[n] = false;
                result[index++] = n;
            }
        }

        int[] finalResult = new int[index];
        System.arraycopy(result, 0, finalResult, 0, index);

        return finalResult;
    }
}