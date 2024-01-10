function transportationHub (path: number[][]): number {
    const set = new Set<number>();
    const inpath = new Array<number>(1001).fill(0);
    const outpath = new Array<number>(1001).fill(0);
    for (const [from, to, ] of path) {
        inpath[to]++;
        outpath[from]++;
        set.add(from);
        set.add(to);
    }
    let res = -1;
    for (let i = 0; i < inpath.length; i++) {
        if (!set.has(i)) {
            continue;
        }
        if (inpath[i] === set.size - 1 && outpath[i] === 0) {
            res = i;
            break;
        }
    }
    return res;
}
