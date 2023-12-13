function maximumBeauty (items: number[][], queries: number[]): number[] {
    items.sort((a, b) => a[0] - b[0]);
    const beauties = new Array<number>(items.length);
    beauties[0] = items[0][1];
    for (let i = 1; i < beauties.length; i++) {
        beauties[i] = Math.max(beauties[i - 1], items[i][1]);
    }

    const result = new Array<number>(queries.length);
    for (let i = 0; i < queries.length; i++) {
        let r = -1;
        let l = 0;
        let h = beauties.length - 1;
        while (l <= h) {
            const m = (l + h) >> 1;
            if (items[m][0] > queries[i]) {
                h = m - 1;
            } else {
                r = Math.max(r, m);
                l = m + 1;
            }
        }
        result[i] = r === -1 ? 0 : beauties[r];
    }
    return result;
}
