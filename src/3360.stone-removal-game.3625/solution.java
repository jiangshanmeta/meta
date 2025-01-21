class Solution {
    public boolean canAliceWin(int n) {
        boolean Alice = true;
        int stone = 10;
        while(n>0 && n>=stone){
            Alice = !Alice;
            n -= stone;
            stone--;
        }
        return !Alice;
    }
}