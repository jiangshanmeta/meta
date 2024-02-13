function returnToBoundaryCount(nums: number[]): number {
    let result = 0;
    let d = 0
    for (const n of nums) {
        d += n
        if (d === 0) {
            result++
        }
    }
    return result
};