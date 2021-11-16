function timeRequiredToBuy (tickets: number[], k: number): number {
    const succMax = tickets[k] - 1;
    const prevMax = tickets[k];
    let result = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i > k) {
            result += Math.min(tickets[i], succMax);
        } else {
            result += Math.min(tickets[i], prevMax);
        }
    }
    return result;
}
