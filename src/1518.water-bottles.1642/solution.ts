function numWaterBottles (numBottles: number, numExchange: number): number {
    let result = 0;
    let empty = 0;
    while (numBottles > 0) {
        result += numBottles;
        empty += numBottles;
        const rest = empty % numExchange;
        numBottles = (empty - rest) / numExchange;
        empty = rest;
    }
    return result;
}
