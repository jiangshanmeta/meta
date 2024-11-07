class Solution {
    public int maxSales(int[] sales) {
        int result = sales[0];
        int current = 0;
        for(int sale : sales){
            current = Math.max(0,current)+sale;
            result = Math.max(result,current);
        }
        return result;
    }
}