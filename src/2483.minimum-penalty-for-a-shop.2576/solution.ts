function bestClosingTime (customers: string): number {
    let Y = 0;
    let N = 0;
    for (const c of customers) {
        if (c === 'Y') {
            Y++;
        }
    }
    let minCost = customers.length - Y;
    let result = customers.length;
    for (let i = 0; i < customers.length; i++) {
        const cost = Y + N;
        if (cost < minCost) {
            minCost = cost;
            result = i;
        } else if (cost === minCost && result === customers.length) {
            result = i;
        }
        if (customers[i] === 'Y') {
            Y--;
        } else {
            N++;
        }
    }

    return result;
}
