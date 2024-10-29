function winningPlayerCount (n: number, pick: number[][]): number {
    const counts = new Array<number[]>(n);
    for (let i = 0; i < n; i++) {
        counts[i] = new Array<number>(11).fill(0);
    }
    for (const [x, y, ] of pick) {
        counts[x][y]++;
    }
    let result = 0;
    for (let i = 0; i < n; i++) {
        let flag = false;
        for (const c of counts[i]) {
            if (c > i) {
                flag = true;
            }
        }
        if (flag) {
            result++;
        }
    }
    return result;
}
