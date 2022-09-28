function getMaxLen (nums: number[]): number {
    let result = 0;
    let left = 0;
    while (left < nums.length) {
        while (left < nums.length && nums[left] === 0) {
            left++;
        }
        if (left === nums.length) {
            break;
        }
        const oddIndexs:number[] = [];
        let right = left;
        while (right < nums.length && nums[right] !== 0) {
            if (nums[right] < 0) {
                oddIndexs.push(right);
            }
            right++;
        }
        if (oddIndexs.length % 2 === 0) {
            result = Math.max(result, right - left);
        } else if (oddIndexs.length === 1) {
            result = Math.max(result, oddIndexs[0] - left, right - (oddIndexs[0] + 1));
        } else {
            result = Math.max(
                result,
                oddIndexs[oddIndexs.length - 1] - left,
                right - (oddIndexs[0] + 1)
            );
        }

        left = right;
    }
    return result;
}
