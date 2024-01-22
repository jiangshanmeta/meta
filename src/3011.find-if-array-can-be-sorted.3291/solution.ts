function canSortArray (nums: number[]): boolean {
    let index = 0;
    let prevMax = 0;
    while (index < nums.length) {
        let min = nums[index];
        let max = nums[index];
        const c = count1(nums[index++]);
        while (index < nums.length && count1(nums[index]) === c) {
            min = Math.min(nums[index], min);
            max = Math.max(nums[index], max);
            index++;
        }
        if (min < prevMax) {
            return false;
        }
        prevMax = max;
    }
    return true;
}

function count1 (num:number) {
    let res = 0;
    while (num) {
        res++;
        num &= (num - 1);
    }
    return res;
}
