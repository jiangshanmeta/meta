function numMovesStones (a: number, b: number, c: number): number[] {
    const seq = [a, b, c, ].sort((a, b) => a - b);
    const result = [1, seq[2] - seq[0] - 2, ];
    const diff1 = seq[1] - seq[0];
    const diff2 = seq[2] - seq[1];
    if (diff1 > 2 && diff2 > 2) {
        result[0] = 2;
    } else if (diff1 === 1 && diff2 === 1) {
        result[0] = 0;
    }
    return result;
}
