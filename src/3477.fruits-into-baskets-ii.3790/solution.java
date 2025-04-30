class Solution {
    public int numOfUnplacedFruits(int[] fruits, int[] baskets) {
        boolean[] used = new boolean[baskets.length];
        int cnt = fruits.length;
        for(int fruit : fruits){
            for(int i=0;i< baskets.length;i++){
                if(used[i] || baskets[i]<fruit){
                    continue;
                }
                used[i] = true;
                cnt--;
                break;
            }
        }
        return cnt;
    }
}