function minimumSize (nums: number[], maxOperations: number): number {
    let low = 1;
    let high = Math.max(...nums);
    let result = high;
    nums.sort((a, b) => b - a);
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (check(nums, mid, maxOperations)) {
            result = Math.min(result, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

function check (nums:number[], profit:number, maxOperations:number):boolean {
    let index = 0;
    while (index < nums.length && maxOperations >= 0) {
        maxOperations -= (Math.ceil(nums[index++] / profit) - 1);
    }
    return index === nums.length && maxOperations >= 0;
}
