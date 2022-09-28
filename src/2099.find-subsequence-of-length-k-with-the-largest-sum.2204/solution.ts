function maxSubsequence (nums: number[], k: number): number[] {
    return nums.map((value, index) => {
        return {
            value,
            index,
        };
    }).sort((a, b) => {
        if (a.value !== b.value) {
            return b.value - a.value;
        }
        return a.index - b.index;
    }).slice(0, k).sort((a, b) => {
        return a.index - b.index;
    }).map(item => item.value);
}
