function closestRoom (rooms: number[][], queries: number[][]): number[] {
    rooms.sort((a, b) => b[1] - a[1]);
    const queries2 = queries.map((query, index) => {
        return {
            query,
            index,
        };
    }).sort((a, b) => b.query[1] - a.query[1]);
    const result = new Array<number>(queries.length);

    let rIndex = 0;
    const seq:number[] = [];
    for (let i = 0; i < queries2.length; i++) {
        const {
            query: [preferId, minSize, ],
            index,
        } = queries2[i];

        while (rIndex < rooms.length && rooms[rIndex][1] >= minSize) {
            seq.push(rooms[rIndex++][0]);
            let j = seq.length - 1;
            while (j > 0 && seq[j] < seq[j - 1]) {
                const tmp = seq[j - 1];
                seq[j - 1] = seq[j];
                seq[j--] = tmp;
            }
        }
        if (seq.length === 0) {
            result[index] = -1;
            continue;
        }
        let low = 0;
        let high = seq.length - 1;
        let res = -1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (seq[mid] > preferId) {
                high = mid - 1;
            } else {
                res = mid;
                low = mid + 1;
            }
        }
        if (res === -1) {
            result[index] = seq[0];
        } else if (res === seq.length - 1) {
            result[index] = seq[res];
        } else {
            const i1 = seq[res];
            const i2 = seq[res + 1];
            const d1 = preferId - i1;
            const d2 = i2 - preferId;
            if (d2 < d1) {
                result[index] = i2;
            } else {
                result[index] = i1;
            }
        }
    }
    return result;
}
