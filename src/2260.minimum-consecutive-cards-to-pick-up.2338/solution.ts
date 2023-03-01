function minimumCardPickup (cards: number[]): number {
    const map = new Map<number, number>();
    let result = cards.length + 1;
    for (let i = 0; i < cards.length; i++) {
        if (map.has(cards[i])) {
            result = Math.min(result, i - map.get(cards[i])! + 1);
        }
        map.set(cards[i], i);
    }
    return result > cards.length ? -1 : result;
}
