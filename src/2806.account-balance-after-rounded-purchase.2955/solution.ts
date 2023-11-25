function accountBalanceAfterPurchase (purchaseAmount: number): number {
    const mod = purchaseAmount % 10;
    if (mod > 4) {
        purchaseAmount += 10 - mod;
    } else {
        purchaseAmount -= mod;
    }
    return 100 - purchaseAmount;
}
