function leftRigthDifference (nums: number[]): number[] {
    const rightSum = new Array<number>(nums.length);
    rightSum[rightSum.length - 1] = 0;
    for (let i = nums.length - 2; i > -1; i--) {
        rightSum[i] = rightSum[i + 1] + nums[i + 1];
    }
    const result = new Array<number>(nums.length);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        result[i] = Math.abs(rightSum[i] - leftSum);
        leftSum += nums[i];
    }

    return result;
}
