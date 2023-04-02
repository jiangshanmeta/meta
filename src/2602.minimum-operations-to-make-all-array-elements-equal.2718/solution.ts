function minOperations (nums: number[], queries: number[]): number[] {
    nums.sort((a, b) => a - b);
    const prefixs = new Array<number>(nums.length);
    prefixs[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixs[i + 1] = prefixs[i] + nums[i];
    }
    return queries.map((query) => {
        let low = 0;
        let high = nums.length - 1;
        let index = nums.length;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (nums[mid] > query) {
                index = Math.min(index, mid);
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return query * index - prefixs[index] + prefixs[prefixs.length - 1] - prefixs[index] - query * (nums.length - index);
    });
}
