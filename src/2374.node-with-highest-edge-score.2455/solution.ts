function edgeScore (edges: number[]): number {
    const scores = new Array<number>(edges.length).fill(0);
    for (let i = 0; i < edges.length; i++) {
        scores[edges[i]] += i;
    }
    let maxScore = 0;
    let result = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            result = i;
        }
    }
    return result;
}
