class Solution {
    public boolean lemonadeChange(int[] bills) {
        int[] cashes = new int[]{0,0};
        for(int bill : bills){
            if(bill == 5){
                cashes[0]++;
            }else if(bill == 10){
                if(cashes[0] == 0){
                    return false;
                }
                cashes[1]++;
                cashes[0]--;
            }else {
                if(cashes[1] != 0 && cashes[0] != 0){
                    cashes[0]--;
                    cashes[1]--;
                }else if(cashes[0]>2){
                    cashes[0] -= 3;
                }else{
                    return false;
                }
            }
        }
        return true;
    }
}