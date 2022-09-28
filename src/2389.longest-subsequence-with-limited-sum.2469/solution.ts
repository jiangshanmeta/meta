function answerQueries (nums: number[], queries: number[]): number[] {
    nums.sort((a, b) => a - b);
    const sums = nums.reduce((list, item) => {
        list.push(list[list.length - 1] + item);
        return list;
    }, [0, ]);

    return queries.map((item) => {
        let low = 0;
        let high = sums.length - 1;
        let rst = 0;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (sums[mid] <= item) {
                rst = Math.max(rst, mid);
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return rst;
    });
}
