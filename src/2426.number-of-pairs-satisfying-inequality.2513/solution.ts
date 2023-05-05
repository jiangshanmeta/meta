function numberOfPairs (nums1: number[], nums2: number[], diff: number): number {
    const nums3 = nums2.map((num, index) => num - nums1[index]);
    const L = Math.min(...nums3);
    const R = Math.max(...nums3);
    const values = [0, ];
    const leftIndexs = [0, ];
    const rightIndexs = [0, ];
    let count = 1;
    console.log(nums3);

    function pushDown (
        index:number
    ) {
        if (!leftIndexs[index]) {
            const leftIndex = count++;
            leftIndexs[index] = leftIndex;
            values[leftIndex] = 0;
        }

        if (!rightIndexs[index]) {
            const rightIndex = count++;
            rightIndexs[index] = rightIndex;
            values[rightIndex] = 0;
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
            return query(leftIndex, rangeL, mid, queryL, mid) + query(rightIndex, mid + 1, rangeR, mid + 1, queryR);
        }
    }

    function update (
        rootIndex:number,
        rangeL:number,
        rangeR:number,
        target:number
    ) {
        if (rangeL === rangeR && rangeL === target) {
            values[rootIndex]++;
            return;
        }
        pushDown(rootIndex);
        const leftIndex = leftIndexs[rootIndex];
        const rightIndex = rightIndexs[rootIndex];
        const mid = Math.floor((rangeL + rangeR) / 2);
        if (target > mid) {
            update(rightIndex, mid + 1, rangeR, target);
        } else {
            update(leftIndex, rangeL, mid, target);
        }

        values[rootIndex] = values[leftIndex] + values[rightIndex];
    }

    let result = 0;
    for (const num of nums3) {
        const min = num - diff;
        if (min <= R) {
            result += query(0, L, R, Math.max(min, L), R);
        }

        update(0, L, R, num);
    }

    return result;
}
