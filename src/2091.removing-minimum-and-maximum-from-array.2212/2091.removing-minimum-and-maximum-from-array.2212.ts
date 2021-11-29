function minimumDeletions (nums: number[]): number {
    let maxVal = nums[0];
    let maxValIndex = 0;
    let minVal = nums[0];
    let minValIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
            maxValIndex = i;
        } else if (nums[i] < minVal) {
            minVal = nums[i];
            minValIndex = i;
        }
    }

    const maxIndex = Math.max(maxValIndex, minValIndex);
    const minIndex = Math.min(maxValIndex, minValIndex);

    return Math.min(
        maxIndex + 1,
        nums.length - minIndex,
        minIndex + 1 + nums.length - maxIndex
    );
}
