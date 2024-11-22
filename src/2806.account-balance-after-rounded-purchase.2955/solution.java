class Solution {
    public int accountBalanceAfterPurchase(int purchaseAmount) {
        int mod = purchaseAmount%10;
        if(mod<5){
            purchaseAmount -= mod;
        }else{
            purchaseAmount += 10-mod;
        }
        return 100-purchaseAmount;
    }
}