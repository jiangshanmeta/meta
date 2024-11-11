class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int result = numBottles;
        int empty = numBottles;
        while(empty>=numExchange){
            int newBottle = empty/numExchange;
            int rest = empty%numExchange;
            result += newBottle;
            empty = rest+newBottle;
        }
        return result;
    }
}