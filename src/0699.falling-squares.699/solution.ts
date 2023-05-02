function fallingSquares (positions: number[][]): number[] {
    const MAX = 10 ** 8 + 10 ** 6;
    const values = [0, ];
    const marks = [0, ];
    const leftIndexs = [0, ];
    const rightIndexs = [0, ];
    let count = 1;

    function pushDown (index:number) {
        if (!leftIndexs[index]) {
            const leftIndex = count++;
            leftIndexs[index] = leftIndex;
            values[leftIndex] = 0;
            marks[leftIndex] = 0;
        }

        if (!rightIndexs[index]) {
            const rightIndex = count++;
            rightIndexs[index] = rightIndex;
            values[rightIndex] = 0;
            marks[rightIndex] = 0;
        }

        const leftIndex = leftIndexs[index];
        const rightIndex = rightIndexs[index];

        if (marks[index]) {
            values[leftIndex] = marks[index];
            marks[leftIndex] = marks[index];
            values[rightIndex] = marks[index];
            marks[rightIndex] = marks[index];
            marks[index] = 0;
        }
    }

    function query (
        rootIndex:number,
        rangeL:number,
        rangeR:number,
        queryL:number,
        queryR:number
    ):number {
        if (rangeL === queryL && rangeR === queryR) {
            return values[rootIndex];
        }
        pushDown(rootIndex);
        const leftIndex = leftIndexs[rootIndex];
        const rightIndex = rightIndexs[rootIndex];
        const mid = Math.floor((rangeL + rangeR) / 2);

        if (queryL > mid) {
            return query(rightIndex, mid + 1, rangeR, queryL, queryR);
        } else if (queryR < mid + 1) {
            return query(leftIndex, rangeL, mid, queryL, queryR);
        } else {
            return Math.max(
                query(leftIndex, rangeL, mid, queryL, mid),
                query(rightIndex, mid + 1, rangeR, mid + 1, queryR)
            );
        }
    }

    function update (
        rootIndex:number,
        rangeL:number,
        rangeR:number,
        updateL:number,
        updateR:number,
        h:number
    ) {
        if (rangeL === updateL && rangeR === updateR) {
            values[rootIndex] = h;
            marks[rootIndex] = h;
            return;
        }
        pushDown(rootIndex);

        const leftRootIndex = leftIndexs[rootIndex];
        const rightRootIndex = rightIndexs[rootIndex];

        const mid = Math.floor((rangeL + rangeR) / 2);
        if (updateL > mid) {
            update(rightRootIndex, mid + 1, rangeR, updateL, updateR, h);
        } else if (updateR < mid + 1) {
            update(leftRootIndex, rangeL, mid, updateL, updateR, h);
        } else {
            update(leftRootIndex, rangeL, mid, updateL, mid, h);
            update(rightRootIndex, mid + 1, rangeR, mid + 1, updateR, h);
        }

        values[rootIndex] = Math.max(values[leftRootIndex], values[rightRootIndex]);
    }

    return positions.map(([left, sideLength, ]) => {
        const before = query(
            0,
            0,
            MAX,
            left,
            left + sideLength - 1
        );
        update(0, 0, MAX, left, left + sideLength - 1, before + sideLength);

        return values[0];
    });
}
