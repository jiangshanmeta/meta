class Solution {
    public List<Integer> twoOutOfThree(int[] nums1, int[] nums2, int[] nums3) {
        int[] counts = new int[101];
        boolean[] set = new boolean[101];
        for(int n:nums1){
            if(set[n]){
                continue;
            }
            set[n] = true;
            counts[n]++;
        }

        Arrays.fill(set,false);
        for(int n:nums2){
            if(set[n]){
                continue;
            }
            set[n] = true;
            counts[n]++;
        }

        Arrays.fill(set,false);
        for(int n:nums3){
            if(set[n]){
                continue;
            }
            set[n] = true;
            counts[n]++;
        }
        
        List<Integer> result = new ArrayList<>();
        for(int i=0;i<counts.length;i++){
            if(counts[i]>=2){
                result.add(i);
            }
        }
        
        return result;
    }
}