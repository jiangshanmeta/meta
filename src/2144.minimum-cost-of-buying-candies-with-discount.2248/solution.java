class Solution {
    public int minimumCost(int[] cost) {
        Arrays.sort(cost);
        int result = 0;
        int index = cost.length-1;
        while(index>-1){
            result += cost[index--];
            if(index>-1){
                result += cost[index--];
            }
            index--;
        }
        return result;
    }
}