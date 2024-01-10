function minimumOperations (leaves: string): number {
    const rightReds = new Array<number>(leaves.length);
    rightReds[rightReds.length - 1] = leaves[leaves.length - 1] === 'r' ? 0 : 1;
    for (let i = rightReds.length - 2; i > 0; i--) {
        rightReds[i] = rightReds[i + 1] + (leaves[i] === 'r' ? 0 : 1);
    }
    let res = leaves.length;
    let r = 0;
    let y = 0;
    if (leaves[0] === 'y') {
        r = 1;
        y = 1;
    }
    for (let i = 1; i < leaves.length - 1; i++) {
        const nr = r + (leaves[i] === 'r' ? 0 : 1);
        const ny = Math.min(
            r,
            y
        ) + (leaves[i] === 'y' ? 0 : 1);

        res = Math.min(ny + rightReds[i + 1], res);
        r = nr;
        y = ny;
    }
    return res;
}
