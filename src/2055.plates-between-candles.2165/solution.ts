function platesBetweenCandles (s: string, queries: number[][]): number[] {
    const prefix = new Array<number>(s.length + 1);
    prefix[0] = 0;
    const leftNearestCancleIndexs = new Array<number>(s.length);
    const rightNearestCandleIndexs = new Array<number>(s.length);
    let l = -1;
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') {
            l = i;
        } else {
            c++;
        }
        prefix[i + 1] = c;
        leftNearestCancleIndexs[i] = l;
    }
    let r = s.length;
    for (let i = s.length - 1; i > -1; i--) {
        if (s[i] === '|') {
            r = i;
        }
        rightNearestCandleIndexs[i] = r;
    }
    return queries.map(([l, r, ]) => {
        let res = prefix[r + 1] - prefix[l];
        const firstRight = rightNearestCandleIndexs[l];
        if (firstRight >= r) {
            return 0;
        }
        res -= (prefix[firstRight] - prefix[l]);
        const firstLeft = leftNearestCancleIndexs[r];
        if (firstLeft <= l) {
            return 0;
        }
        res -= (prefix[r + 1] - prefix[firstLeft]);

        return res;
    });
}
