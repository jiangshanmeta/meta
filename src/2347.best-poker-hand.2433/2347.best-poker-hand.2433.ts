function bestHand (ranks: number[], suits: string[]): string {
    if (suits.every(item => item === suits[0])) {
        return 'Flush';
    }
    const map = new Map<number, number>();
    for (const rank of ranks) {
        if (map.has(rank)) {
            const num = map.get(rank) + 1;
            if (num === 3) {
                return 'Three of a Kind';
            }
            map.set(rank, num);
        } else {
            map.set(rank, 1);
        }
    }
    for (const c of map.values()) {
        if (c === 2) {
            return 'Pair';
        }
    }
    return 'High Card';
}
