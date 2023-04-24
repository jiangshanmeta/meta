function getSubarrayBeauty (nums: number[], k: number, x: number): number[] {
    const result:number[] = [];
    const negativeFrequence = new Array<number>(51).fill(0);
    let count = 0;
    for (let i = 0; i < k - 1; i++) {
        if (nums[i] < 0) {
            negativeFrequence[-nums[i]]++;
            count++;
        }
    }
    for (let i = k - 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            negativeFrequence[-nums[i]]++;
            count++;
        }
        if (count < x) {
            result.push(0);
        } else {
            let c = 0;
            for (let i = 50; i > -1; i--) {
                c += negativeFrequence[i];
                if (c >= x) {
                    result.push(-i);
                    break;
                }
            }
        }

        if (nums[i - k + 1] < 0) {
            negativeFrequence[-nums[i - k + 1]]--;
            count--;
        }
    }
    return result;
}
