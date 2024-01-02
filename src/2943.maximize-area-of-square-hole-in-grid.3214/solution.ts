function maximizeSquareHoleArea (n: number, m: number, hBars: number[], vBars: number[]): number {
    hBars.sort((a, b) => a - b);
    const set = new Set<number>([2, ]);
    let index = 0;
    while (index < hBars.length) {
        const start = index++;
        while (index < hBars.length && hBars[index] === hBars[index - 1] + 1) {
            index++;
            set.add(index - start + 1);
        }
    }
    let res = 2;
    vBars.sort((a, b) => a - b);
    index = 0;
    while (index < vBars.length) {
        const start = index++;
        while (index < vBars.length && vBars[index] === vBars[index - 1] + 1) {
            index++;
            const l = index - start + 1;
            if (set.has(l)) {
                res = Math.max(res, l);
            }
        }
    }
    return res * res;
}
