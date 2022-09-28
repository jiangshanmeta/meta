function minCount (coins: number[]): number {
    let result = 0;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] & 1) {
            result++;
        }
        result += (coins[i] >> 1);
    }
    return result;
}
