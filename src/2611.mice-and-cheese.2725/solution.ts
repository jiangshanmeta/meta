function miceAndCheese (reward1: number[], reward2: number[], k: number): number {
    const scores = reward1.map((first, index) => {
        return {
            first,
            second: reward2[index],
            diff: first - reward2[index],
        };
    }).sort((a, b) => b.diff - a.diff);

    let result = 0;
    for (let i = 0; i < k; i++) {
        result += scores[i].first;
    }
    for (let i = k; i < scores.length; i++) {
        result += scores[i].second;
    }

    return result;
}
