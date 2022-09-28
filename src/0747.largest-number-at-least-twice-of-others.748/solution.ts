function dominantIndex (nums: number[]): number {
    let maxVal = -Infinity;
    let maxIndex = -1;
    let nextVal = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            nextVal = maxVal;
            maxVal = nums[i];
            maxIndex = i;
        } else {
            nextVal = Math.max(nextVal, nums[i]);
        }
    }
    if (maxVal >= nextVal * 2) {
        return maxIndex;
    }
    return -1;
}
