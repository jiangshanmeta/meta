function buttonWithLongestTime (events: number[][]): number {
    let maxTime = events[0][1];
    let result = events[0][0];
    for (let i = 1; i < events.length; i++) {
        const diff = events[i][1] - events[i - 1][1];
        if (diff > maxTime) {
            maxTime = diff;
            result = events[i][0];
        } else if (diff === maxTime) {
            result = Math.min(result, events[i][0]);
        }
    }
    return result;
}
