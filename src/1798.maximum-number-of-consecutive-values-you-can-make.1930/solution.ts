function getMaximumConsecutive (coins: number[]): number {
    let result = 0;
    coins.sort((a, b) => a - b);
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > result + 1) {
            break;
        }
        result += coins[i];
    }
    return result + 1;
}
