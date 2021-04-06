function kWeakestRows (mat: number[][], k: number): number[] {
    return mat.map((row, index) => {
        let count = 0;
        for (let i = 0; i < row.length; i++) {
            if (row[i] === 0) {
                break;
            }
            count++;
        }
        return {
            count,
            index,
        };
    }).sort((a, b) => {
        if (a.count !== b.count) {
            return a.count - b.count;
        }
        return a.index - b.index;
    }).slice(0, k).map(item => item.index);
}
