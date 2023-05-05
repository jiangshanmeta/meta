function handleQuery (nums1: number[], nums2: number[], queries: number[][]): number[] {
    const values = new Array<number>(nums1.length * 4).fill(0);
    const marks = new Array<boolean>(nums1.length * 4).fill(false);
    function build (
        rootIndex:number,
        rangeL:number,
        rangeR:number
    ) {
        if (rangeL === rangeR) {
            values[rootIndex] = nums1[rangeL];
            return;
        }
        const mid = Math.floor((rangeL + rangeR) / 2);
        const leftRootIndex = 2 * rootIndex + 1;
        const rightRootIndex = leftRootIndex + 1;
        build(leftRootIndex, rangeL, mid);
        build(rightRootIndex, mid + 1, rangeR);
        values[rootIndex] = values[leftRootIndex] + values[rightRootIndex];
    }

    build(0, 0, nums1.length - 1);

    function update (
        rootIndex:number,
        rangeL:number,
        rangeR:number,
        updateL:number,
        updateR:number
    ) {
        if (rangeL === updateL && rangeR === updateR) {
            values[rootIndex] = rangeR - rangeL + 1 - values[rootIndex];
            marks[rootIndex] = !marks[rootIndex];
            return;
        }
        const leftRootIndex = 2 * rootIndex + 1;
        const rightRootIndex = leftRootIndex + 1;
        const mid = Math.floor((rangeL + rangeR) / 2);

        if (marks[rootIndex]) {
            const leftTotal = mid - rangeL + 1;
            const rightTotal = rangeR - mid;

            values[leftRootIndex] = leftTotal - values[leftRootIndex];
            values[rightRootIndex] = rightTotal - values[rightRootIndex];
            marks[leftRootIndex] = !marks[leftRootIndex];
            marks[rightRootIndex] = !marks[rightRootIndex];

            marks[rootIndex] = false;
        }

        if (updateL > mid) {
            update(rightRootIndex, mid + 1, rangeR, updateL, updateR);
        } else if (updateR < mid + 1) {
            update(leftRootIndex, rangeL, mid, updateL, updateR);
        } else {
            update(leftRootIndex, rangeL, mid, updateL, mid);
            update(rightRootIndex, mid + 1, rangeR, mid + 1, updateR);
        }

        values[rootIndex] = values[leftRootIndex] + values[rightRootIndex];
    }

    const result:number[] = [];
    let sum = nums2.reduce((acc, item) => acc + item, 0);
    for (const [op, l, r, ] of queries) {
        if (op === 1) {
            update(0, 0, nums1.length - 1, l, r);
        } else if (op === 2) {
            sum += l * values[0];
        } else {
            result.push(sum);
        }
    }

    return result;
}
