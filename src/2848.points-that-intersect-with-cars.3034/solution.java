class Solution {
    public int numberOfPoints(List<List<Integer>> nums) {
        int[] parks = new int[102];
        nums.forEach((list)->{
            parks[list.getFirst()]++;
            parks[list.get(1)+1]--;
        });

        int result = 0;
        for(int i=1;i<parks.length;i++){
            parks[i] += parks[i-1];
            if(parks[i]>0){
                result++;
            }
        }

        return result;
                
    }
}