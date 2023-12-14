function maxSubarrays (nums: number[]): number {
    const and = nums.reduce((acc, item) => acc & item);
    if (and > 0) {
        return 1;
    }
    let index = 0;
    let res = 0;
    while (index < nums.length) {
        let acc = nums[index++];
        while (index < nums.length && acc !== 0) {
            acc &= nums[index++];
        }
        if (acc === 0) {
            res++;
        }
    }
    return res;
}
