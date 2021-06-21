function isCovered (ranges: number[][], left: number, right: number): boolean {
    ranges.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });

    let start = ranges[0][0];
    if (start > left) {
        return false;
    }

    for (const range of ranges) {
        if (start < left) {
            start = range[1];
            continue;
        }

        if (range[0] > start + 1) {
            if (start >= right) {
                return true;
            }
            return false;
        }
        start = Math.max(start, range[1]);
    }

    return start >= right;
}
