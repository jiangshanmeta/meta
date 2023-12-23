function splitArray (nums: number[], k: number): number {
    let low = 0;
    let high = nums.reduce((acc, item) => acc + item, 0);
    let res = 0;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const current = calc(nums, mid);
        if (current > k) {
            low = mid + 1;
        } else {
            res = mid;
            high = mid - 1;
        }
    }
    return res;
}

function calc (nums:number[], limit:number) {
    let res = 0;
    let index = 0;
    while (index < nums.length) {
        let sum = 0;
        while (index < nums.length) {
            if (nums[index] > limit) {
                return Infinity;
            }
            if (sum + nums[index] > limit) {
                break;
            } else {
                sum += nums[index++];
            }
        }
        res++;
    }

    return res;
}
