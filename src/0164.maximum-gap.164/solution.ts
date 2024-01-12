function radixSort (nums:number[]) {
    const MAX = Math.max(...nums);
    const counts = new Array<number>(10);
    const help = new Array<number>(nums.length);
    const MAX_DIGITS = String(MAX).length;
    let offset = 1;
    for (let k = 0; k < MAX_DIGITS; k++) {
        counts.fill(0);
        for (let i = 0; i < nums.length; i++) {
            counts[Math.floor(nums[i] / offset) % 10]++;
        }
        for (let i = 1; i < 10; i++) {
            counts[i] += counts[i - 1];
        }
        for (let i = nums.length - 1; i > -1; i--) {
            help[--counts[Math.floor(nums[i] / offset) % 10]] = nums[i];
        }
        for (let i = 0; i < nums.length; i++) {
            nums[i] = help[i];
        }
        offset *= 10;
    }
}

function maximumGap (nums: number[]): number {
    if (nums.length < 2) {
        return 0;
    }
    radixSort(nums);
    let res = 0;
    for (let i = 1; i < nums.length; i++) {
        res = Math.max(res, nums[i] - nums[i - 1]);
    }
    return res;
}
