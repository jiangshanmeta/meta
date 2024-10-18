class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int max = candies[0];
        for(int candy : candies){
            max = Math.max(max,candy);
        }
        List<Boolean> result = new ArrayList<>();
        for(int candy : candies){
            if(candy+extraCandies<max){
                result.add(false);
            }else {
                result.add(true);
            }
        }
        return result;
    }
}