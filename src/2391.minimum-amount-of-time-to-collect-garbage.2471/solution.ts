function garbageCollection (garbage: string[], travel: number[]): number {
    const expenses = [0, ];
    for (let i = 0; i < travel.length; i++) {
        expenses[i + 1] = expenses[i] + travel[i];
    }
    let M = 0;
    let P = 0;
    let G = 0;
    let mi = 0;
    let pi = 0;
    let gi = 0;
    for (let i = 0; i < garbage.length; i++) {
        for (const c of garbage[i]) {
            if (c === 'M') {
                M++;
                mi = i;
            } else if (c === 'P') {
                P++;
                pi = i;
            } else if (c === 'G') {
                G++;
                gi = i;
            }
        }
    }

    return M + P + G + expenses[mi] + expenses[pi] + expenses[gi];
}
