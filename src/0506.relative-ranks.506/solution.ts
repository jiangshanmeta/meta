function findRelativeRanks (score: number[]): string[] {
    const scoreIndexMap = new Map<number, number>();
    for (let i = 0; i < score.length; i++) {
        scoreIndexMap.set(score[i], i);
    }
    score.sort((a, b) => b - a);
    const result = new Array<string>(score.length);
    for (let i = 0; i < score.length; i++) {
        let rank = `${i + 1}`;
        if (i === 0) {
            rank = 'Gold Medal';
        } else if (i === 1) {
            rank = 'Silver Medal';
        } else if (i === 2) {
            rank = 'Bronze Medal';
        }
        result[scoreIndexMap.get(score[i])] = rank;
    }
    return result;
}
