function minOperations (nums: number[], x: number): number {
    let sum = 0;
    let index = 0;
    while (index < nums.length && sum < x) {
        sum += nums[index++];
    }
    let result = nums.length + 1;
    if (sum === x) {
        result = index;
    }
    if (sum < x) {
        return -1;
    }

    index--;
    let index2 = nums.length - 1;
    while (index > -1) {
        sum -= nums[index--];
        while (index2 > index && sum < x) {
            sum += nums[index2--];
        }
        if (sum === x) {
            result = Math.min(result, index + nums.length - index2);
        }
    }

    return result === nums.length + 1 ? -1 : result;
}
