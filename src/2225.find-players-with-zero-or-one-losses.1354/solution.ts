function findWinners (matches: number[][]): number[][] {
    const winMap = new Map<number, number>();
    const lostMap = new Map<number, number>();
    for (const [winner, loser, ] of matches) {
        if (winMap.has(winner)) {
            winMap.set(winner, winMap.get(winner)! + 1);
        } else {
            winMap.set(winner, 1);
        }

        if (lostMap.has(loser)) {
            lostMap.set(loser, lostMap.get(loser)! + 1);
        } else {
            lostMap.set(loser, 1);
        }
    }
    const result = [
        [],
        [],
    ];
    for (const id of winMap.keys()) {
        if (!lostMap.has(id)) {
            result[0].push(id);
        }
    }
    for (const [id, count, ] of lostMap) {
        if (count === 1) {
            result[1].push(id);
        }
    }
    result[0].sort((a, b) => a - b);
    result[1].sort((a, b) => a - b);
    return result;
}
