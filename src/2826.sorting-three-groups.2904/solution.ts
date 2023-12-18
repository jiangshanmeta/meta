function minimumOperations (nums: number[]): number {
    let res = [
        nums[0] === 1 ? 0 : 1,
        nums[0] === 2 ? 0 : 1,
        nums[0] === 3 ? 0 : 1,
    ];

    for (let i = 1; i < nums.length; i++) {
        const nr = [
            res[0] + (nums[i] === 1 ? 0 : 1),
            Math.min(
                res[0],
                res[1]
            ) + (nums[i] === 2 ? 0 : 1),
            Math.min(
                res[0],
                res[1],
                res[2]
            ) + (nums[i] === 3 ? 0 : 1),
        ];

        res = nr;
    }
    return Math.min(...res);
}
