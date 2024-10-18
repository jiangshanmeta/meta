class Solution {
    public int minCount(int[] coins) {
        int cnt = 0;
        for(int coin : coins){
            cnt += (coin+1)>>1;
        }
        return cnt;
    }
}