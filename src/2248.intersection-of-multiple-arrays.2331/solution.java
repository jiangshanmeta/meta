class Solution {
    public List<Integer> intersection(int[][] nums) {
        int[] counts = new int[1001];
        for(int[] list: nums){
            for(int n:list){
                counts[n]++;
            }
        }
        List<Integer> result = new ArrayList<>();
        final int L = nums.length;
        for(int i=1;i<counts.length;i++){
            if(counts[i] == L){
                result.add(i);
            }
        }
        return result;
    }
}