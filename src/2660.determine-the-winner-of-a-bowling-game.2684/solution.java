class Solution {
    public int isWinner(int[] player1, int[] player2) {
        int score1 = calc(player1);
        int score2 = calc(player2);
        if(score1>score2){
            return 1;
        }else if(score1<score2){
            return 2;
        }
        return 0;
    }

    private int calc(int[] player){
        int result = 0;
        for(int i=0;i<player.length;i++){
            boolean isDouble = (i>0 && player[i-1] == 10) || (i>1 && player[i-2] == 10);
            result += (isDouble? 2:1)*player[i];
        }
        return result;
    }
}